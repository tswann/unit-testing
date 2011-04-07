﻿using CodeSlice.UnitTesting.Model;
using NSpec;

class tag_spec : nspec
{
    void when_setting_the_tag_name()
    {
        before = () => _tag = new Tag { Name = "My Tag Name" };
        it["should normalise the tag name"] = () => _tag.NormalisedName.should_be("mytagname");
    }

    private Tag _tag;
}
