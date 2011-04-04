using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CodeSlice.UnitTesting.Model
{
    /// <summary>
    /// Enum representing the type of question
    /// </summary>
    public enum QuestionType
    {
        General = 0,      // General question/Unclassified
        NonTechnical = 1, // Non Technical question
        Technical = 2,    // Technical question
        Puzzle = 3        // Longer Technical question such as FizzBuzz
    }
}
