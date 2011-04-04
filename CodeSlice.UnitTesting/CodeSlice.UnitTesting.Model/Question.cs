using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace CodeSlice.UnitTesting.Model
{
    /// <summary>
    /// Question class represents an interview question within the application
    /// </summary>
    public class Question : DomainEntity
    {
        [Required]
        public string QuestionText { get; set; }

        [Range(1, 5)]
        public int Difficulty { get; set; }        
        public QuestionType Type { get; set; }

        public virtual ICollection<Tag> Tags { get; set; }
        public virtual ICollection<Vote> Votes { get; set; }
    }
}
