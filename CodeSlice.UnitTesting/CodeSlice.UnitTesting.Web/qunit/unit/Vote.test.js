module('Vote Model Validation');

test('Invalid Vote Value (-2)', function(){
    var vote = new Vote({ value: -2 });
    equals(vote.validate().length, 1);
});

test('Invalid Vote Value (0)', function(){
    var vote = new Vote({ value: 0 });
    equals(vote.validate().length, 1);
});

test('Invalid Vote Value (2)', function(){
    var vote = new Vote({ value: 2 });
    equals(vote.validate().length, 1);
});

test('Valid Vote Value (-1)', function(){
    var vote = new Vote({ value: -1 });
    equals(vote.validate().length, 0);
});

test('Valid Vote Value (1)', function(){
    var vote = new Vote({ value: 1 });
    equals(vote.validate().length, 0);
});