var apiKey = require('./../.env').apiKey;

const url = `https://api.betterdoctor.com/2016-03-01/doctors?location=OR&user_key=${apiKey}`

export class Doctor {
  constructor(query, lastName) {
    this.query = query;
    this.lastName = lastName;
    this.holder = [];
  }
  queryFind (query) {
    const querySearch = `&query=${this.query}`;
    $.get(url + querySearch)
    .then((result) => {
      const drCount = result.meta.count
      let queryDocFound = result.data
      //loop through all results for as many results as there are.
      for (var i = 0; i <= drCount; i++) {
        let queryDocFound = result.data[i];
      }
      queryDocFound.forEach((result) => {
        $('#dr-result').append(`<li>${result.profile.first_name} ${result.profile.last_name}</li> <li>${result.practices[i].visit_address[0]}</li> <li>${result.practices.phones}</li>
        <li>"accepting new patients?" ${result.practices.accepts_new_patients}</li>`);
        //instead, pass in to displayDoc! -> through forloop to access the addresses.
      });
    })
    .fail(function() {
      $('#dr-result').text("Something went wrong, please modify your request and try again.");
    });
  }
//   nameFind(lastName) {
//     //const nameSearch = `&last_name=${this.lastName}`
//     $.get (url + nameSearch)
//     .then ((result) => {
//
//     })
//     .fail ((result){
//       $('#dr-result').text("Something went wrong, please modify your  request and try again.");
//     });
    //instead, pass into displayError callback to display. ->
//
//   }
}
