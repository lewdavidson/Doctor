var apiKey = require('./../.env').apiKey;

const url = `https://api.betterdoctor.com/2016-03-01/doctors?location=or-portland&user_key=${apiKey}`

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
      const queryDocFound = result.data[0].profile;
      console.log(queryDocFound);
      this.holder.push(queryDocFound);
      console.log(this.holder);
    })
    .then((result) => {
      this.holder.forEach((result) => {
      $('#dr-result').append(`<li>${result.first_name}</li>`);
      });
    })
    .fail(function() {
      console.log('fail');
    });
  }
}
