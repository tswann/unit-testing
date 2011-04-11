using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using NUnit.Framework;

namespace CodeSlice.UnitTesting.NUnit
{
    [TestFixture]
    public class TagTest
    {
        [Test]
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
