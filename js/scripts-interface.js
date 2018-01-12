import { Doctor } from "./../js/scripts.js"
//or import ES6

$(document).ready(function(){
  $('form#search-form').submit(function(event){
    event.preventDefault();
    let query = $("#query").val();
    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    let newDoc = new Doctor(query, firstName, lastName);
    newDoc.queryFind(query);

    function renderCallback(result) {
      console.log(result);
      $('#dr-result').append(`<li>${result.first_name}</li>`);
    }
  });
});
