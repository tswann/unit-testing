using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace CodeSlice.UnitTesting.Model
{
    public class Vote : DomainEntity
    {
        [Required]
        [RegularExpression("^-?1$")]
        public int Value { get; set; }

        #region Associations
        public virtual Question Question { get; set; }
        #endregion
    }
}
