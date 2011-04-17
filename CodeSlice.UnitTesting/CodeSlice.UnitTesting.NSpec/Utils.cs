using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.ComponentModel.DataAnnotations;
using NSpec;

namespace CodeSlice.UnitTesting.NSpec.Utils
{
    public static class Utils
    {
        public static IEnumerable<ValidationResult> Validate<TModel>(this nspec spec, TModel model, string property)
        {
            List<ValidationResult> _results = new List<ValidationResult>();
            ValidationContext _ctx = new ValidationContext(model, null, null);
            Validator.TryValidateObject(model, _ctx, _results, true);

            return from result in _results
                   where result.MemberNames.Contains(property)
                   select result;
        }
    }
}
