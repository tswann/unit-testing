using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.ComponentModel.DataAnnotations;

namespace CodeSlice.UnitTesting.NUnit
{
    [TestClass]
    public class VoteTest
    {
        [TestMethod]
        public void InvalidVoteValueTest1()
        {
            Model.Vote vote = new Model.Vote { Value = -2 };
            Assert.AreEqual(1, GetValidationResultsForField(vote, "Value").Count());
        }

        [TestMethod]
        public void InvalidVoteValueTest2()
        {
            Model.Vote vote = new Model.Vote { Value = 0 };
            Assert.AreEqual(1, GetValidationResultsForField(vote, "Value").Count());
        }

        [TestMethod]
        public void InvalidVoteValueTest3()
        {
            Model.Vote vote = new Model.Vote { Value = 2 };
            Assert.AreEqual(1, GetValidationResultsForField(vote, "Value").Count());
        }

        [TestMethod]
        public void ValidVoteValueTest1()
        {
            Model.Vote vote = new Model.Vote { Value = -1 };
            Assert.AreEqual(0, GetValidationResultsForField(vote, "Value").Count());
        }

        [TestMethod]
        public void ValidVoteValueTest2()
        {
            Model.Vote vote = new Model.Vote { Value = 1 };
            Assert.AreEqual(0, GetValidationResultsForField(vote, "Value").Count());
        }

        protected IEnumerable<ValidationResult> GetValidationResultsForField(Model.DomainEntity entity, string field)
        {
            List<ValidationResult> results = new List<ValidationResult>();
            ValidationContext ctx = new ValidationContext(entity, null, null);
            Validator.TryValidateObject(entity, ctx, results, true);

            return from result in results
                   where result.MemberNames.Contains(field)
                   select result;
        }
    }
}
