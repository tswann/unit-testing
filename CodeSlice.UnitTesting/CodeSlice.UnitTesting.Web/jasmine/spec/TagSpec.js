describe('Tag', function() {
    var tag;

    beforeEach(function() {
        tag = new Tag();
    });

    it("should normalise a tag name", function(){
        tag.setName('A Tag Name');
        expect(tag.getNormalisedName()).toEqual('atagname');
    });
});