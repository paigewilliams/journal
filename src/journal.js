export function numberOfWords(body){
  var words = body.split(' ').length;
  return words;
}

export function numberOfVowels(body) {
  var vowels = body.match(/[aeiou]/gi);
  return vowels === null ? 0 : vowels.length;
}

export function numberOfCont(body) {
  var con = body.match(/[bcdfghjklmnpqrstvwxyz]/gi);
  return con === null ? 0 : con.length;
}

export function getTeaser(body) {
  var sentances = body.split('. ');
  var wordsPerSentance = sentances[0].split(' ');
  var firstEight = []
  for (var i = 0; i < 8; i++) {
    firstEight.push(wordsPerSentance[i]);
  }
  var teaser = firstEight.join(' ')
   return teaser
}