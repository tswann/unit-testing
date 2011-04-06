module('Tag Model Validation');

test('Tag name normalisation', function(){
    var tag = new Tag({ name: 'A Tag Name' }),
        normalisedName = tag.getNormalisedName();

    equals('atagname', normalisedName);
});