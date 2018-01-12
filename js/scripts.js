var apiKey = require('./../.env').apiKey;

const url = `https://api.betterdoctor.com/2016-03-01/doctors?location=or-portlandhttps://api.betterdoctor.com/2016-03-01/doctors?location=or-portland&user_key=${apiKey}`

export class Doctor {
  constructor(special, firstName, lastName) {
    this.special = special;
    this.firstName = firstName;
    this.lastName = lastName;
    console.log(this.special)
  }
  specialtyFind (special) {
    const specialSearch = `&specialty_uid=${this.special}`;
    $.get(url + specialSearch)
    .then(() => {
      console.log('success');
    })
    .fail(() => {
      console.log('failure');
    });
  }
}
