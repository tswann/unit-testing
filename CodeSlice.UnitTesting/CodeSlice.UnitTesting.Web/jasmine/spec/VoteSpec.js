describe('Vote', function() {
    var vote;

    beforeEach(function() {
        vote = new Vote();
    });

    it("should be invalid if a value of -2 is set", function(){
        vote.setValue(-2);
        expect(vote.validate().length).toEqual(1);
    });

    it("should be invalid if a value of 0 is set", function(){
        vote.setValue(0);
        expect(vote.validate().length).toEqual(1);
    });

    it("should be invalid if a value of 2 is set", function(){
        vote.setValue(2);
        expect(vote.validate().length).toEqual(1);
    });

    it("should be valid if a value of -1 is set", function(){
        vote.setValue(-1);
        expect(vote.validate().length).toEqual(0);
    });

    it("should be valid if a value of 1 is set", function(){
        vote.setValue(1);
        expect(vote.validate().length).toEqual(0);
    });
});