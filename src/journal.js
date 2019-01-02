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

