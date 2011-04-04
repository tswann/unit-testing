using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace CodeSlice.UnitTesting.MSpec
{
    public class ValidationTest
    {
        protected static IList<ValidationResult> _results;

        protected static void Validate(Model.DomainEntity entity)
        {
            _results = new List<ValidationResult>();
            ValidationContext ctx = new ValidationContext(entity, null, null);
            Validator.TryValidateObject(entity, ctx, _results, true);
        }

        protected static IEnumerable<ValidationResult> GetValidationResultsForField(string field)
        {
            return from result in _results
                   where result.MemberNames.Contains(field)
                   select result;
        }
    }
}
