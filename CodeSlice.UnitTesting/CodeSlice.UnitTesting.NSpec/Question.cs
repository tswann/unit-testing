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

        void when_i_create_a_question_the_created_date()
        {
            Model.Question q = new Model.Question();
            it["should be roughly now"] = () => q.CreatedDate.should_be(DateTime.Now);
        }

        void when_validating_the_Difficulty_property_with_an_invalid_value()
        {
            new[] { -2, 0, 6, 7 }.Do(value =>
            {
                Model.Question q = new Model.Question { Difficulty = value };
                it["of {0}, should be errors".With(value)] = () => this.Validate(q, "Difficulty").should_not_be_empty();
            });
        }

        void when_validating_the_Difficulty_property_with_a_valid_value()
        {
            new[] { 1, 2, 3, 4, 5 }.Do(value =>
            {
                Model.Question q = new Model.Question { Difficulty = value };
                it["of {0}, should be no errors".With(value)] = () => this.Validate(q, "Difficulty").should_be_empty();
            });
        }

        void when_validating_the_CreatedBy_property_with_an_unset_value()
        {
            Model.Question q = new Model.Question();
            it["should be invalid"] = () => this.Validate(q, "CreatedBy").should_not_be_empty();
        }

        void when_validating_the_CreatedBy_property_with_a_valid_value()
        {
            Model.Question q = new Model.Question { CreatedBy = "jameshughes" };
            it["should be valid"] = () => this.Validate(q, "CreatedBy").should_be_empty();
        }
    }
}
