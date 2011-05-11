using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace CodeSlice.UnitTesting.MSTest
{
    [TestClass]
    public class QuestionTest : ValidationTest
    {
        [TestMethod]
        public void InvalidQuestionNullQuestionTextTest()
        {
            Model.Question q = new Model.Question { QuestionText = null };
            Assert.AreEqual(GetValidationResultsForField(q, "QuestionText").Count(), 1);
        }

        [TestMethod]
        public void InvalidQuestionEmptyQuestionTextTest()
        {
            Model.Question q = new Model.Question { QuestionText = string.Empty };
            Assert.AreEqual(GetValidationResultsForField(q, "QuestionText").Count(), 1);
        }

        [TestMethod]
        public void ValidQuestionQuestionTextTest()
        {
            Model.Question q = new Model.Question { QuestionText = "Valid Value" };
            Assert.AreEqual(GetValidationResultsForField(q, "QuestionText").Count(), 0);
        }

        [TestMethod]
        public void CreatedDateRoughlyNowTest()
        {
            Model.Question q = new Model.Question();
            Assert.AreEqual(q.CreatedDate, DateTime.Now);
        }
    }
}
