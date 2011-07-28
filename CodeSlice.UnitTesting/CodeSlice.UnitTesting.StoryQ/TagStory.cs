using NUnit.Framework;
using Should.Fluent;
using StoryQ;

namespace CodeSlice.UnitTesting.StoryQ
{
    [TestFixture]
    public class TagStory : StorySpecBase
    {
        Model.Tag _tag;

        protected override Feature DescribeStory(Story story)
        {
            return story.InOrderTo("Normalise Tag Name")
                        .AsA("User")
                        .IWant("my tag to have a normalised name");
        }

        [TestCase]
        public void CreateNewTag()
        {
            Scenario
                .Given(IHaveCreatedANewTag)
                .When(ISetItsNameTo, "New Test Tag")
                .Then(ItShouldHaveTheNormalisedName, "newtesttag")
                .ExecuteWithReport();
        }

        public void IHaveCreatedANewTag()
        {
            _tag = new Model.Tag();
        }

        public void ISetItsNameTo(string tagName)
        {
            _tag.Name = tagName;
        }

        public void ItShouldHaveTheNormalisedName(string normalisedName)
        {
            _tag.NormalisedName.Should().Equal(normalisedName);
        }
    }
}
