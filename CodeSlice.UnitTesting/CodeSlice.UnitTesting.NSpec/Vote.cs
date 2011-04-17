using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using NSpec;
using System.ComponentModel.DataAnnotations;
using CodeSlice.UnitTesting.NSpec.Utils;

namespace CodeSlice.UnitTesting.NSpec
{
    /// <summary>
    /// Vote testing code kindly donated by @mattflo (Matthew Florence)
    /// Original: https://gist.github.com/916594
    /// </summary>
    class describe_Vote : nspec
    {
        void when_validating_a_valid_vote()
        {
            new[] { -1, 1 }.Do(vote => 
            {
                Model.Vote v = new Model.Vote { Value = vote };
                it["of {0}, should be no errors".With(vote)] = () => this.Validate(v, "Value").should_be_empty();
            });
        }

        void when_validating_an_invalid_vote()
        {
            new[] { -2, 0, 2 }.Do(vote =>
            {
                Model.Vote v = new Model.Vote { Value = vote };
                it["of {0}, should be errors".With(vote)] = () => this.Validate(v, "Value").should_not_be_empty();
            });
        }
    }
}
