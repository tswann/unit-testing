using CodeSlice.UnitTesting.Model;
using NSpec;

namespace CodeSlice.UnitTesting.NSpec
{
    class describe_Tag : nspec
    {
        void when_setting_the_tag_name_to_My_Tag_Name()
        {
            before = () => _tag = new Tag { Name = "My Tag Name" };
            string expected = "mytagname";
            it["should normalise the tag name to {0}".With(expected)] = () => _tag.NormalisedName.should_be(expected);
        }

        private Tag _tag;
    }
}
