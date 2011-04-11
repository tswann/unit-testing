using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace CodeSlice.UnitTesting.NUnit
{
    [TestClass]
    public class TagTest
    {
        [TestMethod]
        public void TagNameNormalisationTest()
        {
            Model.Tag tag = new Model.Tag
            {
                Name = "My Tag Name"
            };

            Assert.AreEqual(tag.NormalisedName, "mytagname");
        }
    }
}
