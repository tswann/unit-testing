using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using NUnit.Framework;
using Should.Fluent;
using StoryQ;

namespace CodeSlice.UnitTesting.StoryQ
{
    [TestFixture]
    public class VoteStory
    {
        Model.Vote _vote;
        IList<ValidationResult> results = new List<ValidationResult>();
        const string VALUE = "Value";

        #region Story

        [TestCase]
        public void ValidateVoteValues()
        {
            new Story("Place Vote")
                .InOrderTo("Place a vote")
                .AsA("User")
                .IWant("The value entered to be valid")
                    .WithScenario("VoteValueIsMinusTwo")
                        .Given(IHaveCreatedANewVote)
                        .And(IHaveSetTheValueAs, -2)
                        .When(IValidateTheVote)
                        .Then(TheFieldShouldBeInvalid, VALUE)

                    .WithScenario("VoteValueIsMinusOne")
                        .Given(IHaveCreatedANewVote)
                        .And(IHaveSetTheValueAs, -1)
                        .When(IValidateTheVote)
                        .Then(TheFieldShouldBeValid, VALUE)

                    .WithScenario("VoteValueIsZero")
                        .Given(IHaveCreatedANewVote)
                        .And(IHaveSetTheValueAs, 0)
                        .When(IValidateTheVote)
                        .Then(TheFieldShouldBeInvalid, VALUE)

                    .WithScenario("VoteValueIsOne")
                        .Given(IHaveCreatedANewVote)
                        .And(IHaveSetTheValueAs, 1)
                        .When(IValidateTheVote)
                        .Then(TheFieldShouldBeValid, VALUE)

                    .WithScenario("VoteValueIsTwo")
                        .Given(IHaveCreatedANewVote)
                        .And(IHaveSetTheValueAs, 2)
                        .When(IValidateTheVote)
                        .Then(TheFieldShouldBeInvalid, VALUE)
                    .ExecuteWithReport();
        }

        #endregion

        #region Givens
        public void IHaveCreatedANewVote()
        {
            _vote = new Model.Vote();
        }

        public void IHaveSetTheValueAs(int value)
        {
            _vote.Value = value;
        }
        #endregion

        #region Whens
        public void IValidateTheVote()
        {
            Validate(_vote);
        }
        #endregion

        #region Thens
        public void TheFieldShouldBeInvalid(string fieldName)
        {
            results.Should().Contain.Any(vr => vr.MemberNames.Contains(fieldName));
        }

        public void TheFieldShouldBeValid(string fieldName)
        {
            results.Should().Not.Contain.Any(vr => vr.MemberNames.Contains(fieldName));
        }
        #endregion

        #region Helpers
        private void Validate(Model.DomainEntity entity)
        {
            results.Clear();
            ValidationContext ctx = new ValidationContext(entity, null, null);
            Validator.TryValidateObject(entity, ctx, results, true);
        }
        #endregion
    }
}
