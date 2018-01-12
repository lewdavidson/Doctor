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

  });
});


// + <li>${result.practices.visit_address}</li> + <li>${result.practices.phones[0].number}</li> + <li>"accepting new patients?" ${result.practices.accepts_new_patients}</li>
