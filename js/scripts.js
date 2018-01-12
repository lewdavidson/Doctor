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
      let drCount = result.meta.count;
      const queryDocFound = result.data[0].profile;
      console.log(queryDocFound);
      for (i = 0; i <= drCount; i++) {
        result.data i++;
      }
      this.holder.push(queryDocFound);
    })
    .then((result) => {
      this.holder.forEach((result) => {
      $('#dr-result').append(`<li>${result.first_name} ${result.last_name}</li>`);
      });
    })
    .fail(function() {
      $('#dr-result').text(`<li>"Something went wrong, please modify your request and try again."</li>`);
    });
  }
}
