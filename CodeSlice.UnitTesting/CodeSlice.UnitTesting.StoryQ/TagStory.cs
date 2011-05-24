using NUnit.Framework;
using Should.Fluent;
using StoryQ;

namespace CodeSlice.UnitTesting.StoryQ
{
    [TestFixture]
    public class TagStory
    {
        Model.Tag _tag;

        [TestCase]
        public void TagNameNormalisationTest()
        {
            new Story("Normalise Tag Name")
                .InOrderTo("Create a tag")
                .AsA("User")
                .IWant("my tag to have a normalised name")
                .WithScenario("Create new Tag")
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
