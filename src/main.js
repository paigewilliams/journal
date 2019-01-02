import { Entry } from './journal';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  $('#journal-form').submit(function(event){
    event.preventDefault();
    var body = $('#body').val();
    var newEntry = new Entry(body) 
    $('#words').append(newEntry.numberOfWords())
    $('#vowels').append(newEntry.numberOfVowels());
    $('#cont').append(newEntry.numberOfCont());
    $('#teaser').append(newEntry.getTeaser());
    
  })
})