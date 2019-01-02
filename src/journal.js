export function Entry(body) {
  this.body = body;
};

Entry.prototype.numberOfWords = function() {
  var words = this.body.split(' ').length;
  return words;
};

Entry.prototype.numberOfVowels = function() {
  var vowels = this.body.match(/[aeiou]/gi);
  return vowels === null ? 0 : vowels.length;
};

Entry.prototype.numberOfCont= function() {
  var con = this.body.match(/[bcdfghjklmnpqrstvwxyz]/gi);
  return con === null ? 0 : con.length;
};

Entry.prototype.getTeaser= function() {
  var sentances = this.body.split('. ');
  var wordsPerSentance = sentances[0].split(' ');
  var firstEight = []
  for (var i = 0; i < 8; i++) {
    firstEight.push(wordsPerSentance[i]);
  };
  var teaser = firstEight.join(' ')
   return teaser
};