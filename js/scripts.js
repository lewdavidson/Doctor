var apiKey = require('./../.env').apiKey;

const url = `https://api.betterdoctor.com/2016-03-01/doctors?location=or-portland&user_key=${apiKey}`

export class Doctor {
  constructor(query, firstName, lastName) {
    this.query = query;
    this.firstName = firstName;
    this.lastName = lastName;
    this.holder = [];
    console.log(this.query)
  }
  queryFind (query) {
    const querySearch = `&query=${this.query}`;
    $.get(url + querySearch)
    .then((result) => {
      const queryDocFound = result.data[0].practices;
      queryDocFound.forEach((result) => {
        // console.log(result.name);
        // return result.name;
        // renderCallback(result.name);
        this.holder.push(result.name);
        console.log(this.holder);
        renderCallback(this.holder);
      });
    })
    // .then ((queryDocFound) => {
    // })
    .fail(function() {
      console.log('failure');
    });
  }
}

function renderCallback() {};
