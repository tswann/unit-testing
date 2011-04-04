using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Machine.Specifications;

namespace CodeSlice.UnitTesting.MSpec
{
    [Subject("Validate Invalid Vote (-2)")]
    public class when_i_validate_a_vote_with_value_below_minimum : ValidationTest
    {
        static Model.Vote _vote;

        Establish context = () =>
            _vote = new Model.Vote { Value = -2 };

        Because of = () =>
            Validate(_vote);

        It should_have_a_validation_error_for_value_field = () =>
            GetValidationResultsForField("Value").ShouldNotBeEmpty();
    }

    [Subject("Validate Valid Vote (-1)")]
    public class when_i_validate_a_vote_with_a_minimum_value : ValidationTest
    {
        static Model.Vote _vote;

        Establish context = () =>
            _vote = new Model.Vote { Value = -1 };

        Because of = () =>
            Validate(_vote);

        It should_not_have_a_validation_error_for_the_value_field = () =>
            GetValidationResultsForField("Value").ShouldBeEmpty();
    }

    [Subject("Validate Invalid Vote (0)")]
    public class when_i_validate_a_vote_with_value_of_zero : ValidationTest
    {
        static Model.Vote _vote;

        Establish context = () =>
            _vote = new Model.Vote { Value = 0 };

        Because of = () =>
            Validate(_vote);

        It should_have_a_validation_error_for_value_field = () =>
            GetValidationResultsForField("Value").ShouldNotBeEmpty();
    }

    [Subject("Validate Valid Vote (1)")]
    public class when_i_validate_a_vote_with_a_maximum_value : ValidationTest
    {
        static Model.Vote _vote;

        Establish context = () =>
            _vote = new Model.Vote { Value = 1 };

        Because of = () =>
            Validate(_vote);

        It should_not_have_a_validation_error_for_the_value_field = () =>
            GetValidationResultsForField("Value").ShouldBeEmpty();
    }

    [Subject("Validate Invalid Vote (2)")]
    public class when_i_validate_a_vote_with_value_above_maximum : ValidationTest
    {
        static Model.Vote _vote;

        Establish context = () =>
            _vote = new Model.Vote { Value = 2 };

        Because of = () =>
            Validate(_vote);

        It should_have_a_validation_error_for_value_field = () =>
            GetValidationResultsForField("Value").ShouldNotBeEmpty();
    }
}
