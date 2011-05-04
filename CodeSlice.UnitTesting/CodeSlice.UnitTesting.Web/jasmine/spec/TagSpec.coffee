describe 'Tag', ->    
  beforeEach -> @tag = new Tag
  it "should normalise a tag name", ->
    @tag.setName 'A Tag Name'
    name = @tag.getNormalisedName()
    expect(name).toEqual 'atagname'