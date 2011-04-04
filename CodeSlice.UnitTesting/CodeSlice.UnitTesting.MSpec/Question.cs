using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Machine.Specifications;

namespace CodeSlice.UnitTesting.MSpec
{
    #region Question Text Validation
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
    #endregion

    #region Create Date Validation
    [Subject("Validate Created Date")]
    public class when_i_create_a_question_the_created_date_should_be_roughly_now
    {
        static Model.Question _question;

        Establish context = () =>
            _question = new Model.Question();

        It should_have_a_created_date_of_roughly_now = () =>
            _question.CreatedDate.ShouldBeCloseTo(DateTime.Now, TimeSpan.FromSeconds(1));
    }
    #endregion

    #region Difficulty Validation
    [Subject("Validate Difficulty (Unset)")]
    public class when_i_validate_a_question_with_an_unset_difficulty : ValidationTest
    {
        static Model.Question _question;

        Establish context = () =>
            _question = new Model.Question();

        Because of = () =>
            Validate(_question);

        It should_have_a_validation_error_for_the_difficulty_field = () =>
            GetValidationResultsForField("Difficulty").ShouldNotBeEmpty();
    }

    [Subject("Validate Difficulty (Below minimum)")]
    public class when_i_validate_a_question_with_a_difficulty_below_minimum : ValidationTest
    {
        static Model.Question _question;

        Establish context = () =>
            _question = new Model.Question { Difficulty = -1 };

        Because of = () =>
            Validate(_question);

        It should_have_a_validation_error_for_the_difficulty_field = () =>
            GetValidationResultsForField("Difficulty").ShouldNotBeEmpty();
    }

    [Subject("Validate Difficulty (Above maximum)")]
    public class when_i_validate_a_question_with_a_difficulty_above_maximum : ValidationTest
    {
        static Model.Question _question;

        Establish context = () =>
            _question = new Model.Question { Difficulty = 6 };

        Because of = () =>
            Validate(_question);

        It should_have_a_validation_error_for_the_difficulty_field = () =>
            GetValidationResultsForField("Difficulty").ShouldNotBeEmpty();
    }

    [Subject("Validate Difficulty (Valid)")]
    public class when_i_validate_a_question_with_a_valid_difficulty : ValidationTest
    {
        static Model.Question _question;

        Establish context = () =>
            _question = new Model.Question { Difficulty = 2 };

        Because of = () =>
            Validate(_question);

        It should_not_have_a_validation_error_for_the_difficulty_field = () =>
            GetValidationResultsForField("Difficulty").ShouldBeEmpty();
    }
    #endregion

    #region Created By
    [Subject("Validate Created By (invalid)")]
    public class when_i_validate_a_question_with_an_invalid_created_by : ValidationTest
    {
        static Model.Question _question;

        Establish context = () =>
            _question = new Model.Question();

        Because of = () =>
            Validate(_question);

        It should_have_a_validation_error_for_the_created_by_field = () =>
            GetValidationResultsForField("CreatedBy").ShouldNotBeEmpty();
    }

    [Subject("Validate Created By (valid)")]
    public class when_i_validate_a_question_with_a_valid_created_by : ValidationTest
    {
        static Model.Question _question;

        Establish context = () =>
            _question = new Model.Question { CreatedBy = "james" };

        Because of = () =>
            Validate(_question);

        It should_not_have_a_validation_error_for_the_created_by_field = () =>
            GetValidationResultsForField("CreatedBy").ShouldBeEmpty();
    }
    #endregion
}
