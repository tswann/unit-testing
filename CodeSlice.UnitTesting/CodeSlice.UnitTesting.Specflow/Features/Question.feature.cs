// ------------------------------------------------------------------------------
//  <auto-generated>
//      This code was generated by SpecFlow (http://www.specflow.org/).
//      SpecFlow Version:1.5.0.0
//      Runtime Version:4.0.30319.225
// 
//      Changes to this file may cause incorrect behavior and will be lost if
//      the code is regenerated.
//  </auto-generated>
// ------------------------------------------------------------------------------
#region Designer generated code
namespace CodeSlice.UnitTesting.Specflow.Features
{
    using TechTalk.SpecFlow;
    
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("TechTalk.SpecFlow", "1.5.0.0")]
    [System.Runtime.CompilerServices.CompilerGeneratedAttribute()]
    [NUnit.Framework.TestFixtureAttribute()]
    [NUnit.Framework.DescriptionAttribute("Question Model Validation")]
    public partial class QuestionModelValidationFeature
    {
        
        private static TechTalk.SpecFlow.ITestRunner testRunner;
        
#line 1 "Question.feature"
#line hidden
        
        [NUnit.Framework.TestFixtureSetUpAttribute()]
        public virtual void FeatureSetup()
        {
            testRunner = TechTalk.SpecFlow.TestRunnerManager.GetTestRunner();
            TechTalk.SpecFlow.FeatureInfo featureInfo = new TechTalk.SpecFlow.FeatureInfo(new System.Globalization.CultureInfo("en-US"), "Question Model Validation", "", GenerationTargetLanguage.CSharp, ((string[])(null)));
            testRunner.OnFeatureStart(featureInfo);
        }
        
        [NUnit.Framework.TestFixtureTearDownAttribute()]
        public virtual void FeatureTearDown()
        {
            testRunner.OnFeatureEnd();
            testRunner = null;
        }
        
        public virtual void ScenarioSetup(TechTalk.SpecFlow.ScenarioInfo scenarioInfo)
        {
            testRunner.OnScenarioStart(scenarioInfo);
        }
        
        [NUnit.Framework.TearDownAttribute()]
        public virtual void ScenarioTearDown()
        {
            testRunner.OnScenarioEnd();
        }
        
        [NUnit.Framework.TestAttribute()]
        [NUnit.Framework.DescriptionAttribute("Validate Question Text (Null)")]
        public virtual void ValidateQuestionTextNull()
        {
            TechTalk.SpecFlow.ScenarioInfo scenarioInfo = new TechTalk.SpecFlow.ScenarioInfo("Validate Question Text (Null)", ((string[])(null)));
#line 4
this.ScenarioSetup(scenarioInfo);
#line 5
 testRunner.Given("I have created a new Question");
#line 6
 testRunner.And("I have left the QuestionText null");
#line 7
 testRunner.When("I validate the Question");
#line 8
 testRunner.Then("the QuestionText field should be invalid");
#line hidden
            testRunner.CollectScenarioErrors();
        }
        
        [NUnit.Framework.TestAttribute()]
        [NUnit.Framework.DescriptionAttribute("Validate Question Text (Blank)")]
        public virtual void ValidateQuestionTextBlank()
        {
            TechTalk.SpecFlow.ScenarioInfo scenarioInfo = new TechTalk.SpecFlow.ScenarioInfo("Validate Question Text (Blank)", ((string[])(null)));
#line 10
this.ScenarioSetup(scenarioInfo);
#line 11
 testRunner.Given("I have created a new Question");
#line 12
 testRunner.And("I have left the QuestionText blank");
#line 13
 testRunner.When("I validate the Question");
#line 14
 testRunner.Then("the QuestionText field should be invalid");
#line hidden
            testRunner.CollectScenarioErrors();
        }
        
        [NUnit.Framework.TestAttribute()]
        [NUnit.Framework.DescriptionAttribute("Validate Question Text (Valid)")]
        public virtual void ValidateQuestionTextValid()
        {
            TechTalk.SpecFlow.ScenarioInfo scenarioInfo = new TechTalk.SpecFlow.ScenarioInfo("Validate Question Text (Valid)", ((string[])(null)));
#line 16
this.ScenarioSetup(scenarioInfo);
#line 17
 testRunner.Given("I have created a new Question");
#line 18
 testRunner.And("I have set QuestionText as \"What is this question\"");
#line 19
 testRunner.When("I validate the Question");
#line 20
 testRunner.Then("the QuestionText field should be valid");
#line hidden
            testRunner.CollectScenarioErrors();
        }
        
        [NUnit.Framework.TestAttribute()]
        [NUnit.Framework.DescriptionAttribute("Validate Created Date")]
        public virtual void ValidateCreatedDate()
        {
            TechTalk.SpecFlow.ScenarioInfo scenarioInfo = new TechTalk.SpecFlow.ScenarioInfo("Validate Created Date", ((string[])(null)));
#line 23
this.ScenarioSetup(scenarioInfo);
#line 24
 testRunner.Given("I have created a new Question");
#line 25
 testRunner.Then("the CreatedDate should be roughly the current DateTime");
#line hidden
            testRunner.CollectScenarioErrors();
        }
        
        [NUnit.Framework.TestAttribute()]
        [NUnit.Framework.DescriptionAttribute("Validate Difficulty (Unset)")]
        public virtual void ValidateDifficultyUnset()
        {
            TechTalk.SpecFlow.ScenarioInfo scenarioInfo = new TechTalk.SpecFlow.ScenarioInfo("Validate Difficulty (Unset)", ((string[])(null)));
#line 28
this.ScenarioSetup(scenarioInfo);
#line 29
 testRunner.Given("I have created a new Question");
#line 30
 testRunner.When("I validate the Question");
#line 31
 testRunner.Then("the Difficulty field should be invalid");
#line hidden
            testRunner.CollectScenarioErrors();
        }
        
        [NUnit.Framework.TestAttribute()]
        [NUnit.Framework.DescriptionAttribute("Validate Difficulty (Below Minimum)")]
        public virtual void ValidateDifficultyBelowMinimum()
        {
            TechTalk.SpecFlow.ScenarioInfo scenarioInfo = new TechTalk.SpecFlow.ScenarioInfo("Validate Difficulty (Below Minimum)", ((string[])(null)));
#line 33
this.ScenarioSetup(scenarioInfo);
#line 34
 testRunner.Given("I have created a new Question");
#line 35
 testRunner.And("I have set Difficulty as 0");
#line 36
 testRunner.When("I validate the Question");
#line 37
 testRunner.Then("the Difficulty field should be invalid");
#line hidden
            testRunner.CollectScenarioErrors();
        }
        
        [NUnit.Framework.TestAttribute()]
        [NUnit.Framework.DescriptionAttribute("Validate Difficulty (Above Maximum)")]
        public virtual void ValidateDifficultyAboveMaximum()
        {
            TechTalk.SpecFlow.ScenarioInfo scenarioInfo = new TechTalk.SpecFlow.ScenarioInfo("Validate Difficulty (Above Maximum)", ((string[])(null)));
#line 39
this.ScenarioSetup(scenarioInfo);
#line 40
 testRunner.Given("I have created a new Question");
#line 41
 testRunner.And("I have set Difficulty as 6");
#line 42
 testRunner.When("I validate the Question");
#line 43
 testRunner.Then("the Difficulty field should be invalid");
#line hidden
            testRunner.CollectScenarioErrors();
        }
        
        [NUnit.Framework.TestAttribute()]
        [NUnit.Framework.DescriptionAttribute("Validate Difficulty (valid)")]
        public virtual void ValidateDifficultyValid()
        {
            TechTalk.SpecFlow.ScenarioInfo scenarioInfo = new TechTalk.SpecFlow.ScenarioInfo("Validate Difficulty (valid)", ((string[])(null)));
#line 45
this.ScenarioSetup(scenarioInfo);
#line 46
 testRunner.Given("I have created a new Question");
#line 47
 testRunner.And("I have set Difficulty as 2");
#line 48
 testRunner.When("I validate the Question");
#line 49
 testRunner.Then("the Difficulty field should be valid");
#line hidden
            testRunner.CollectScenarioErrors();
        }
        
        [NUnit.Framework.TestAttribute()]
        [NUnit.Framework.DescriptionAttribute("Validate Created By (invalid)")]
        public virtual void ValidateCreatedByInvalid()
        {
            TechTalk.SpecFlow.ScenarioInfo scenarioInfo = new TechTalk.SpecFlow.ScenarioInfo("Validate Created By (invalid)", ((string[])(null)));
#line 52
this.ScenarioSetup(scenarioInfo);
#line 53
 testRunner.Given("I have created a new Question");
#line 54
 testRunner.When("I validate the Question");
#line 55
 testRunner.Then("the CreatedBy field should be invalid");
#line hidden
            testRunner.CollectScenarioErrors();
        }
        
        [NUnit.Framework.TestAttribute()]
        [NUnit.Framework.DescriptionAttribute("Validate Created By (valid)")]
        public virtual void ValidateCreatedByValid()
        {
            TechTalk.SpecFlow.ScenarioInfo scenarioInfo = new TechTalk.SpecFlow.ScenarioInfo("Validate Created By (valid)", ((string[])(null)));
#line 57
this.ScenarioSetup(scenarioInfo);
#line 58
 testRunner.Given("I have created a new Question");
#line 59
 testRunner.And("I have set CreatedBy as \"jameshu\"");
#line 60
 testRunner.When("I validate the Question");
#line 61
 testRunner.Then("the CreatedBy field should be valid");
#line hidden
            testRunner.CollectScenarioErrors();
        }
    }
}
#endregion
