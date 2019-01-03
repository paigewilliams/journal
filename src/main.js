import { Entry } from './journal';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#journal-form').submit(function(event){
    event.preventDefault();
    var body = $('#body').val();
    var newEntry = new Entry(body);
    $('#words').html(newEntry.numberOfWords());
    $('#vowels').html(newEntry.numberOfVowels());
    $('#cont').html(newEntry.numberOfCont());
    $('#teaser').html(newEntry.getTeaser());
    
  });
});