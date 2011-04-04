using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace CodeSlice.UnitTesting.Model
{
    /// <summary>
    /// Represents a tag in the idea solutuion
    /// </summary>
    public class Tag : DomainEntity
    {
        private string _name;

        [Required]
        public string Name
        {
            get
            {
                return _name;
            }
            set
            {
                _name = value;
                NormalisedName = value.ToLower().Replace(" ", string.Empty);
            }
        }

        [Required]
        public string NormalisedName { get; set; }

        #region Associations
        public virtual ICollection<Question> Questions { get; set; }
        #endregion
    }
}
