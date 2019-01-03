import { Entry } from './../src/journal.js';

describe ('Entry', function(){
  it('should test whether an entry has a body', function(){
    var entry = new Entry("my name is paige")
    expect(entry.body).toEqual("my name is paige")
  });
  it('should count the number of words in an entry', function(){
    var entry = new Entry("my name is paige and I am a human")
    expect(entry.numberOfWords()).toEqual(9)
  });
  it('should count the number of vowels in an entry', function(){
    var entry = new Entry("Paige")
    expect(entry.numberOfVowels()).toEqual(3)
  });
  it('should count the number of consonants in an entry', function(){
    var entry = new Entry("Ariana")
    expect(entry.numberOfCont()).toEqual(2)
  });
  it('should return the first eight words in an entry', function(){
    var entry = new Entry("My name is Paige and I like to code and cook.")
    expect(entry.getTeaser()).toEqual("My name is Paige and I like to")
  });
});