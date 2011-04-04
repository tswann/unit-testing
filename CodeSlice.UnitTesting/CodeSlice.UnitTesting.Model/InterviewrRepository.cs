using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.Entity;

namespace CodeSlice.UnitTesting.Model
{
    /// <summary>
    /// Repository for the Interviewr application
    /// </summary>
    public class InterviewrRepository : DbContext
    {
        #region Database sets
        public DbSet<Question> Questions { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<Vote> Votes { get; set; }
        #endregion
    }
}
