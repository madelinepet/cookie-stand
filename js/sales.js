'use strict';

//create first object
var firstAndPike = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookieSales: 6.3,
  timeArray: ['6am', '7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  //generate random number per hour, no need for a for loop, because the response is generated inside a for loop below
  randomNumCookiesPerHour: function(){
    //add spaces before operators
    return Math.floor((Math.random() * ((this.maxCustomers-this.minCustomers) + 1) + this.minCustomers) * this.avgCookieSales);
  },
  generatePossibilities: function(){
    var firstAndPikeContainer = document.getElementById('firstAndPike');
    for(var i = 0; i < this.timeArray.length; i++){

      var firstAndPikeElement = document.createElement('li');
      firstAndPikeElement.textContent = (this.timeArray[i] + ': ' + this.randomNumCookiesPerHour());
      firstAndPikeContainer.appendChild(firstAndPikeElement);
    }
  }
};
firstAndPike.generatePossibilities();



