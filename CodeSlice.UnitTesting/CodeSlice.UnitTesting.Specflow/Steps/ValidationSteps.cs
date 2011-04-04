using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using TechTalk.SpecFlow;
using System.ComponentModel.DataAnnotations;
using Should.Fluent;

namespace CodeSlice.UnitTesting.Specs.Steps
{
    [Binding]
    public class ValidationSteps
    {
        Model.Question _question;
        Model.Vote _vote;
        IList<ValidationResult> results = new List<ValidationResult>();

        #region Givens
        [Given(@"I have created a new Question")]
        public void GivenIHaveCreatedANewQuestion()
        {
            _question = new Model.Question();
        }

        [Given(@"I have created a new Vote")]
        public void GivenIHaveCreatedANewVote()
        {
            _vote = new Model.Vote();
        }
        
        [Given(@"I have left the QuestionText null")]
        public void GivenIHaveLeftTheQuestionTextNull()
        {
            _question.QuestionText = null;
        }

        [Given(@"I have left the QuestionText blank")]
        public void GivenIHaveLeftTheQuestionTextEmpty()
        {
            _question.QuestionText = string.Empty;
        }

        [Given(@"I have set QuestionText as ""(.*)""")]
        public void GivenIHaveSetQuestionTextAsWhatIsThisQuestion(string question)
        {
            _question.QuestionText = question;
        }

        [Given(@"I have set CreatedBy as ""(.*)""")]
        public void GivenIHaveSetCreatedBy(string username)
        {
            _question.CreatedBy = username;
        }

        [Given(@"I have set Difficulty as (.*)")]
        public void GivenIHaveSetQuestionTextAsWhatIsThisQuestion(int difficulty)
        {
            _question.Difficulty = difficulty;
        }

        [Given(@"I have set the Value as (.*)")]
        public void GivenIHaveSetTheValueAsX(int value)
        {
            _vote.Value = value;
        }
        #endregion

        #region Thens
        [Then(@"the CreatedDate should be roughly the current DateTime")]
        public void ThenShouldBeRoughlyTheCurrentDateTime()
        {
            _question.CreatedDate.Should().Be.Today();
        }

        [Then(@"the (.*) field should be invalid")]
        public void ThenTheFieldShouldBeInvalid(string fieldName)
        {
            results.Should().Contain.Any(vr => vr.MemberNames.Contains(fieldName));
        }

        [Then(@"the (.*) field should be valid")]
        public void ThenTheFieldShouldBeValid(string fieldName)
        {
            results.Should().Not.Contain.Any(vr => vr.MemberNames.Contains(fieldName));
        }
        #endregion

        #region Whens
        [When(@"I validate the Question")]
        public void WhenIValidateTheQuestionModel()
        {
            Validate(_question);
        }

        
        [When(@"I validate the Vote")]
        public void WhenIValidateTheVote()
        {
            Validate(_vote);
        }
        #endregion

        private void Validate(Model.DomainEntity entity)
        {
            results.Clear();
            ValidationContext ctx = new ValidationContext(entity, null, null);
            Validator.TryValidateObject(entity, ctx, results, true);
        }
    }
}
