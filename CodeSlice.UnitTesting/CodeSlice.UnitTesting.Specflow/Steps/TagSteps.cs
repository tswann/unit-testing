using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using TechTalk.SpecFlow;
using NUnit.Framework;
using NUnit.Mocks;
using Should.Fluent;

namespace CodeSlice.UnitTesting.Specs.Steps
{
    [Binding]
    public class TagSteps
    {
        Model.Tag _tag;

        [Given(@"I have created a new tag")]
        public void GivenIHaveCreatedANewTag()
        {
            _tag = new Model.Tag();    
        }

        [When(@"I set its name to ""(.*)""")]
        public void WhenISetItsNameToNewTestTag(string name)
        {
            _tag.Name = name;
        }

        [Then(@"it should have a normalised name of ""(.*)""")]
        public void ThenItShouldHaveANormalisedNameOfNewtestag(string normalisedname)
        {
            _tag.NormalisedName.Should().Equal(normalisedname);
        }
    }
}
