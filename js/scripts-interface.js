import { Doctor } from "./../js/scripts.js";

$(document).ready(function(){
  $('form#search-form').submit(function(event){
    event.preventDefault();
    let query = $("#query").val();
    let lastName = $('#last-name').val();
    let newDoc = new Doctor(query, lastName);
    newDoc.queryFind(query, displayDoc);
    newDoc.nameFind(lastName, displayDoc);
  });
});


function displayDoc(result) {
  const drCount = result.meta.count;
  let queryDocFound = result.data;
  for (var i = 0; i <= drCount; i++) {
    let puppyChow = result.data[i];
};
  queryDocFound.forEach(function(result) {
    let drNew = result.practices[0].accepts_new_patients;
    function acceptingNew(){
      if (drNew === true) {
        return "Yes";
      } else {
        return "No.";
      }
    };
    $('#dr-result').append(`<li>${result.profile.first_name} ${result.profile.last_name}</li> <li>${result.practices[0].visit_address.street}</li> <li>${result.practices[0].phones[0].number}</li>
    <li>accepting new patients:  ${acceptingNew()}</li>`);
  });
};

function failFind(error) {
  $('#dr-result').text("Something went wrong, please modify your request and try again.");
};
