'use strict';
//create first object
var firstAndPike = {
  minCustomersPike: 23,
  maxCustomersPike: 65,
  avgCookieSalesPike: 6.3,
  totalCookiesPike: 0,
  timeArrayPike: ['6am', '7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  //generate random number per hour, no need for a for loop, because the response is generated inside a for loop below
  randomNumCookiesPerHourPike: function(){
    //add spaces before operators
    return Math.floor((Math.random() * ((this.maxCustomersPike-this.minCustomersPike) + 1) + this.minCustomersPike) * this.avgCookieSalesPike);
  },
  generatePossibilitiesPike: function(){
    var firstAndPikeContainer = document.getElementById('firstAndPike');
    for(var i = 0; i < this.timeArrayPike.length; i++){

      var firstAndPikeElement = document.createElement('li');
      firstAndPikeElement.setAttribute('class', 'first-and-pike-row');
      var cookiesAtHour = this.randomNumCookiesPerHourPike();
      this.totalCookiesPike += cookiesAtHour;
      firstAndPikeElement.textContent = (this.timeArrayPike[i] + ': ' + cookiesAtHour + ' cookies.');
      firstAndPikeContainer.appendChild(firstAndPikeElement);
    }
    var firstAndPikeTotalElement = document.createElement('li');
    firstAndPikeTotalElement.textContent =('Total: ' + this.totalCookiesPike + ' cookies.');
    firstAndPikeContainer.appendChild(firstAndPikeTotalElement);
  }
};
firstAndPike.generatePossibilitiesPike();

var seaTac = {
  minCustomersSeaTac: 3,
  maxCustomersSeaTac: 24,
  avgCookieSalesSeaTac: 1.2,
  totalCookiesSeaTac: 0,
  timeArraySeaTac:['6am', '7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  randomNumCookiesPerHourSeaTac: function(){
    return Math.floor((Math.random() * ((this.maxCustomersSeaTac-this.minCustomersSeaTac)+ 1) + this.minCustomersSeaTac) * this.avgCookieSalesSeaTac);
  },
  generatePossibilitiesSeaTac: function(){
    var seaTacContainer = document.getElementById('seaTac');
    for(var i = 0; i < this.timeArraySeaTac.length; i++){
      var seaTacElement = document.createElement('li');
      seaTacElement.setAttribute('class', 'seatac-row');
      var cookiesAtHour = this.randomNumCookiesPerHourSeaTac();
      this.totalCookiesSeaTac += cookiesAtHour;
      seaTacElement.textContent = (this.timeArraySeaTac[i] + ': ' + this.randomNumCookiesPerHourSeaTac() + ' cookies.');
      seaTacContainer.appendChild(seaTacElement);
    }
    var seaTacTotalElement = document.createElement('li');
    seaTacTotalElement.textContent =('Total: ' + this.totalCookiesSeaTac + ' cookies.');
    seaTacContainer.appendChild(seaTacTotalElement);
  }
};
seaTac.generatePossibilitiesSeaTac();


