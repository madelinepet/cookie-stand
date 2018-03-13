'use strict';

var timeArray = ['6am', '7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

//create first object
var firstAndPike = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookieSales: 6.3,
  totalCookies: 0,
  //generate random number per hour, no need for a for loop, because the response is generated inside a for loop below
  randomNumCookiesPerHour: function(){
    //add spaces before operators
    return Math.floor((Math.random() * ((this.maxCustomers-this.minCustomers) + 1) + this.minCustomers) * this.avgCookieSales);
  },
  generatePossibilities: function(){
    var firstAndPikeContainer = document.getElementById('firstAndPike');
    for(var i = 0; i < timeArray.length; i++){

      var listElement = document.createElement('li');
      listElement.setAttribute('class', 'first-and-pike-row');
      var cookiesAtHour = this.randomNumCookiesPerHour();
      this.totalCookies += cookiesAtHour;
      listElement.textContent = (timeArray[i] + ': ' + cookiesAtHour + ' cookies.');
      firstAndPikeContainer.appendChild(listElement);
    }
    var listTotalElement = document.createElement('li');
    listTotalElement.textContent =('Total: ' + this.totalCookies + ' cookies.');
    firstAndPikeContainer.appendChild(listTotalElement);
  }
};
firstAndPike.generatePossibilities();

//SeaTac location
var seaTac = {
  minCustomers: 3,
  maxCustomers: 24,
  avgCookieSales: 1.2,
  totalCookies: 0,
  randomNumCookiesPerHour: function(){
    return Math.floor((Math.random() * ((this.maxCustomers-this.minCustomers)+ 1) + this.minCustomers) * this.avgCookieSales);
  },
  generatePossibilities: function(){
    var seaTacContainer = document.getElementById('seaTac');
    for(var i = 0; i < timeArray.length; i++){
      var seaTacElement = document.createElement('li');
      seaTacElement.setAttribute('class', 'seatac-row');
      var cookiesAtHour = this.randomNumCookiesPerHour();
      this.totalCookies += cookiesAtHour;
      seaTacElement.textContent = (timeArray[i] + ': ' + this.randomNumCookiesPerHour() + ' cookies.');
      seaTacContainer.appendChild(seaTacElement);
    }
    var seaTacTotalElement = document.createElement('li');
    seaTacTotalElement.textContent =('Total: ' + this.totalCookies + ' cookies.');
    seaTacContainer.appendChild(seaTacTotalElement);
  }
};
seaTac.generatePossibilities();

//Seattle Center Location
var seattleCenter = {
  minCustomers: 11,
  maxCustomers: 38,
  avgCookieSales: 3.7,
  totalCookies: 0,
  randomNumCookiesPerHour: function(){
    return Math.floor((Math.random() * ((this.maxCustomers - this.minCustomers) + 1) + this.minCustomers) * this.avgCookieSalesCenter);
  },
  generatePossibilities: function(){
    var centerContainer = document.getElementById('center');
    for(var i = 0; i < timeArray.length; i++){
      var centerElement = document.createElement('li');
      centerElement.setAttribute('class', 'center-row');
      var cookiesAtHour = this.randomNumCookiesPerHour();
      this.totalCookies += cookiesAtHour;
      centerElement.textContent = (timeArray[i] + ': ' + this.randomNumCookiesPerHour() + ' cookies.');
      centerContainer.appendChild(centerElement);
    }
    var centerTotalElement = document.createElement('li');
    centerTotalElement.textContent =('Total: ' + this.totalCookies + ' cookies.');
    centerContainer.appendChild(centerTotalElement);
  }
};
seattleCenter.generatePossibilities();

//Capitol Hill Location
var capitolHill = {
  minCustomersHill: 20,
  maxCustomersHill: 38,
  avgCookieSalesHill: 2.3,
  totalCookiesHill: 0,
  timeArrayHill:['6am', '7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  randomNumCookiesPerHourHill: function(){
    return Math.floor((Math.random() * ((this.maxCustomersHill - this.minCustomersHill) + 1) + this.minCustomersHill) * this.avgCookieSalesHill);
  },
  generatePossibilitiesHill: function(){
    var hillContainer = document.getElementById('capHill');
    for(var i = 0; i < this.timeArrayHill.length; i++){
      var hillElement = document.createElement('li');
      hillElement.setAttribute('class', 'hill-row');
      var cookiesAtHour = this.randomNumCookiesPerHourHill();
      this.totalCookiesHill += cookiesAtHour;
      hillElement.textContent = (this.timeArrayHill[i] + ': ' + this.randomNumCookiesPerHourHill() + ' cookies.');
      hillContainer.appendChild(hillElement);
    }
    var hillTotalElement = document.createElement('li');
    hillTotalElement.textContent =('Total: ' + this.totalCookiesHill + ' cookies.');
    hillContainer.appendChild(hillTotalElement);
  }
};
capitolHill.generatePossibilitiesHill();

//Alki Location
var alki = {
  minCustomersAlki: 20,
  maxCustomersAlki: 38,
  avgCookieSalesAlki: 2.3,
  totalCookiesAlki: 0,
  timeArrayAlki:['6am', '7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  randomNumCookiesPerHourAlki: function(){
    return Math.floor((Math.random() * ((this.maxCustomersAlki - this.minCustomersAlki) + 1) + this.minCustomersAlki) * this.avgCookieSalesAlki);
  },
  generatePossibilitiesAlki: function(){
    var alkiContainer = document.getElementById('alki');
    for(var i = 0; i < this.timeArrayAlki.length; i++){
      var alkiElement = document.createElement('li');
      alkiElement.setAttribute('class', 'alki-row');
      var cookiesAtHour = this.randomNumCookiesPerHourAlki();
      this.totalCookiesAlki += cookiesAtHour;
      alkiElement.textContent = (this.timeArrayAlki[i] + ': ' + this.randomNumCookiesPerHourAlki() + ' cookies.');
      alkiContainer.appendChild(alkiElement);
    }
    var alkiTotalElement = document.createElement('li');
    alkiTotalElement.textContent =('Total: ' + this.totalCookiesAlki + ' cookies.');
    alkiContainer.appendChild(alkiTotalElement);
  }
};
alki.generatePossibilitiesAlki();