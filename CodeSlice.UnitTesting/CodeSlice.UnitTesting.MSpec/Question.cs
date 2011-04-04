using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Machine.Specifications;

namespace CodeSlice.UnitTesting.MSpec
{
    [Subject("Validate Question Text Null")]
    public class when_i_validate_a_question_with_a_null_question_text : ValidationTest
    {
        static Model.Question _question;

        Establish context = () =>
            _question = new Model.Question { QuestionText = null };

        Because of = () =>
            Validate(_question);

        It should_have_a_validation_error_for_the_questiontext_field = () =>
            GetValidationResultsForField("QuestionText").ShouldNotBeEmpty();
    }

    [Subject("Validate Question Text Empty")]
    public class when_i_validate_a_question_with_an_empty_question_text : ValidationTest
    {
        static Model.Question _question;

        Establish context = () =>
            _question = new Model.Question { QuestionText = string.Empty };

        Because of = () =>
            Validate(_question);

        It should_have_a_validation_error_for_the_questiontext_field = () =>
            GetValidationResultsForField("QuestionText").ShouldNotBeEmpty();
    }

    [Subject("Validate Question Text Valid")]
    public class when_i_validate_a_question_with_a_valid_question_text : ValidationTest
    {
        static Model.Question _question;

        Establish context = () =>
            _question = new Model.Question { QuestionText = "Question Text" };

        Because of = () =>
            Validate(_question);

        It should_have_a_validation_error_for_the_questiontext_field = () =>
            GetValidationResultsForField("QuestionText").ShouldBeEmpty();
    }
}
