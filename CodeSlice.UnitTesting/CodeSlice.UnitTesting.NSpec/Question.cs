using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using NSpec;
using CodeSlice.UnitTesting.NSpec.Utils;

namespace CodeSlice.UnitTesting.NSpec
{
    class describe_Question : nspec
    {
        void when_validating_the_QuestionText_field_with_an_invalid_value()
        {
            new[] { null, "" }.Do(value =>
            {
                Model.Question q = new Model.Question { QuestionText = value };
                it["of {0}, should be no errors".With(value ?? "null")] = () => this.Validate(q, "QuestionText").should_not_be_empty();
            });
        }

        void when_validating_the_QuestionText_field_with_a_valid_value()
        {
            Model.Question q = new Model.Question { QuestionText = "Valid Value" };
            it["of Valid Value, should be no errors"] = () => this.Validate(q, "QuestionText").should_be_empty();
        }
    }
}
