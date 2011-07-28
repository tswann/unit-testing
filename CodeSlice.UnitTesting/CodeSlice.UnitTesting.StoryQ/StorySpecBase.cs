using System.Diagnostics;
using System.Runtime.CompilerServices;
using System.Text.RegularExpressions;
using StoryQ;

namespace CodeSlice.UnitTesting.StoryQ
{
    /// <summary>
    /// Base class for Stories. (Taken from http://fknet.wordpress.com/2010/03/26/storyq-scenario-enhancements/
    /// code by RobFe - StoryQ creator)
    /// </summary>
    public abstract class StorySpecBase
    {
        private Feature _feature;

        /// <summary>
        /// Initialises the Story name to the derived class name.
        /// </summary>
        protected StorySpecBase()
        {
            Story s = new Story(Uncamel(GetType().Name));
            _feature = DescribeStory(s);
        }

        /// <summary>
        /// Override in derived classes to provide specific description for their Story.
        /// </summary>
        protected abstract Feature DescribeStory(Story story);

        /// <summary>
        /// Gets a Feature using the enclosing method name.
        /// </summary>
        protected Scenario Scenario
        {
            [MethodImpl(MethodImplOptions.NoInlining)]
            get
            {
                return _feature.WithScenario(Uncamel(new StackFrame(1).GetMethod().Name));
            }
        }

        /// <summary>
        /// Helper method to remove cancel casing from the method name.
        /// </summary>
        private string Uncamel(string methodName)
        {
            return Regex.Replace(methodName, "[A-Z_]", x => " " + x.Value.ToLowerInvariant()).Trim();
        }
    }
}
