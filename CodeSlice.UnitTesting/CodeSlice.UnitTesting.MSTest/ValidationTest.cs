using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace CodeSlice.UnitTesting.MSTest
{
    public class ValidationTest
    {
        protected IEnumerable<ValidationResult> GetValidationResultsForField(Model.DomainEntity entity, string field)
        {
            List<ValidationResult> results = new List<ValidationResult>();
            ValidationContext ctx = new ValidationContext(entity, null, null);
            Validator.TryValidateObject(entity, ctx, results, true);

            return from result in results
                   where result.MemberNames.Contains(field)
                   select result;
        }
    }
}
