using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Collections;
using System.ComponentModel.DataAnnotations;

namespace CodeSlice.UnitTesting.Quixote.Code
{
    public static class DomainEntitySugars
    {
        public static ICollection Validate<TModel>(this TModel model, string property) where TModel : Model.DomainEntity
        {
            List<ValidationResult> _results = new List<ValidationResult>();
            ValidationContext _ctx = new ValidationContext(model, null, null);
            Validator.TryValidateObject(model, _ctx, _results, true);

            return (from result in _results
                    where result.MemberNames.Contains(property)
                    select result).ToArray();
        }
    }
}