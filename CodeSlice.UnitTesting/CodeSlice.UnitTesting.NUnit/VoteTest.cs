using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using NUnit.Framework;
using System.ComponentModel.DataAnnotations;
using System.Collections;

namespace CodeSlice.UnitTesting.NUnit
{
    [TestFixture]
    public class VoteTest : ValidationTest
    {
        [Test]
        public void VoteWithValidValueTest1()
        {
            Model.Vote vote = new Model.Vote
            {
                Value = -1
            };

            ICollection errors = Validate(vote, "Value");
            Assert.IsEmpty(errors);
        }

        [Test]
        public void VoteWithValidValueTest1()
        {
            Model.Vote vote = new Model.Vote
            {
                Value = 1
            };

            ICollection errors = Validate(vote, "Value");
            Assert.IsEmpty(errors);
        }
    }
}
