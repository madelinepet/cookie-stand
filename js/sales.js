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

//SeaTac location
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

//Seattle Center Location
var seattleCenter = {
  minCustomersCenter: 11,
  maxCustomersCenter: 38,
  avgCookieSalesCenter: 3.7,
  totalCookiesCenter: 0,
  timeArrayCenter:['6am', '7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  randomNumCookiesPerHourCenter: function(){
    return Math.floor((Math.random() * ((this.maxCustomersCenter - this.minCustomersCenter) + 1) + this.minCustomersCenter) * this.avgCookieSalesCenter);
  },
  generatePossibilitiesCenter: function(){
    var centerContainer = document.getElementById('center');
    for(var i = 0; i < this.timeArrayCenter.length; i++){
      var centerElement = document.createElement('li');
      centerElement.setAttribute('class', 'center-row');
      var cookiesAtHour = this.randomNumCookiesPerHourCenter();
      this.totalCookiesCenter += cookiesAtHour;
      centerElement.textContent = (this.timeArrayCenter[i] + ': ' + this.randomNumCookiesPerHourCenter() + ' cookies.');
      centerContainer.appendChild(centerElement);
    }
    var centerTotalElement = document.createElement('li');
    centerTotalElement.textContent =('Total: ' + this.totalCookiesCenter + ' cookies.');
    centerContainer.appendChild(centerTotalElement);
  }
};
seattleCenter.generatePossibilitiesCenter();

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