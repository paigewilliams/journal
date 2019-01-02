import { numberOfWords } from './journal';
import { numberOfVowels } from './journal';
import { numberOfCont } from './journal';
import { getTeaser } from './journal';
import './styles.css';

$(document).ready(function(){
  $('#journal-form').submit(function(event){
    event.preventDefault();
    var body = $('#body').val();
    var words = numberOfWords(body);
    var vowels = numberOfVowels(body);
    var cont = numberOfCont(body)
    var teaser = getTeaser(body);
    $('#words').append(words)
    $('#vowels').append(vowels);
    $('#cont').append(cont);
    $('#teaser').append(teaser);
    
  })
})