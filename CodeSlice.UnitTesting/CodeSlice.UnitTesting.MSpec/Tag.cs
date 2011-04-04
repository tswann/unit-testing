using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Machine.Specifications;
using CodeSlice.UnitTesting.Model;

namespace CodeSlice.UnitTesting.MSpec
{
    [Subject("Normalise Tag Name")]
    public class when_a_tag_is_created
    {
        static Tag _tag;

        Establish context = () =>
            _tag = new Tag();

        Because of = () =>
            _tag.Name = "New Test Tag";

        It should_have_a_normalised_name_of_newtesttag = () =>
            _tag.NormalisedName.ShouldEqual("newtesttag");      
    }
}
