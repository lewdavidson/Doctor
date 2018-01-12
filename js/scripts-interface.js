import { Doctor } from "./../js/scripts.js"
//or import ES6

$(document).ready(function(){
  $('form#search-form').submit(function(event){
    event.preventDefault();
    let special = $("#special").val();
    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    let newDoc = new Doctor(special, firstName, lastName);
    newDoc.specialtyFind(special);
  });
});
