using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace CodeSlice.UnitTesting.Model
{
    /// <summary>
    /// Base class for domain entities responsible for holding auditing and 
    /// persistence related properties
    /// </summary>
    public abstract class DomainEntity
    {

        /// <summary>
        /// Default Constructor that sets the created date
        /// </summary>
        public DomainEntity()
        {
            CreatedDate = DateTime.Now;
        }

        [Key]
        public int Id { get; set; }

        [Required]
        public string CreatedBy { get; set; }

        [Required]
        public DateTime CreatedDate { get; private set; }
    }
}
