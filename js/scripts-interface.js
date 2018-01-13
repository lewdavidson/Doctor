import { Doctor } from "./../js/scripts.js"
//or import ES6

$(document).ready(function(){
  $('form#search-form').submit(function(event){
    event.preventDefault();
    let query = $("#query").val();
    let lastName = $('#last-name').val();
    let newDoc = new Doctor(query, lastName);
    newDoc.queryFind(query);
    // newDoc.nameFind(lastName);
  });
});


// function displayDoc(queryDocFound) {
//   // blahblah function(datashit) {
//   //   let i;
//   //   for(i = 0; datashit; i++;)
//   //   #result codeeeeeeeeeeeee
//   // }
//
// };


// function displayError (errormsg) {
//
// };
