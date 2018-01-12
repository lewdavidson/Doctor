var apiKey = require('./../.env').apiKey;

const url = `https://api.betterdoctor.com/2016-03-01/doctors?location=OR&user_key=${apiKey}`

export class Doctor {
  constructor(query, firstName, lastName) {
    this.query = query;
    this.firstName = firstName;
    this.lastName = lastName;
    this.holder = [];
  }
  queryFind (query) {
    const querySearch = `&query=${this.query}`;
    $.get(url + querySearch)
    .then((result) => {
      const drCount = result.meta.count
      let queryDocFound = result.data
      for (var i = 0; i <= drCount; i++) {
        let queryDocFound = result.data[i];
      }
      queryDocFound.forEach((result) => {
        $('#dr-result').append(`<li>${result.profile.first_name} ${result.profile.last_name}</li> <li>${result.practices.visit_address}</li>`);
      });
    })
    .fail(function() {
      $('#dr-result').text("Something went wrong, please modify your request and try again.");
    });
  }
}
