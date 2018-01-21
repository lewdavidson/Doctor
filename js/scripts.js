var apiKey = require('./../.env').apiKey;

const url = `https://api.betterdoctor.com/2016-03-01/doctors?location=OR&user_key=${apiKey}`;

export class Doctor {
  constructor(query, lastName) {
    this.query = query;
    this.lastName = lastName;
  }
  queryFind(query, displayDoc) {
    const querySearch = `&query=${this.query}`;
    $.get(url + querySearch)
    .then(function(result) {
      displayDoc(result);
      })
    .fail(function(error) {
      failFind(error);
    });
  }
  nameFind(lastName, displayDoc) {
    const nameSearch = `&last_name=${this.lastName}`;
    $.get( url + nameSearch )
    .then(function(result){
      displayDoc(result);
    })
    .fail(function(error){
      failFind(error);
    });
  }
}
