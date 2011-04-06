describe "Tag Model"
    describe "Normalised Name Validation"
        it "should set the normalised name to 'mytagname' when I set the tag name as 'My Tag Name'"
            model = new Tag({ name: 'My Tag Name' })
            model.getNormalisedName().should.be 'mytagname'
        end
    end
end