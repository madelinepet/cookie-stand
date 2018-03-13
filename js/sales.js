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
    var listContainer = document.getElementById('firstAndPike');
    for(var i = 0; i < timeArray.length; i++){

      var listElement = document.createElement('li');
      listElement.setAttribute('class', 'first-and-pike-row');
      var cookiesAtHour = this.randomNumCookiesPerHour();
      this.totalCookies += cookiesAtHour;
      listElement.textContent = (timeArray[i] + ': ' + cookiesAtHour + ' cookies.');
      listContainer.appendChild(listElement);
    }
    var listTotalElement = document.createElement('li');
    listTotalElement.textContent =('Total: ' + this.totalCookies + ' cookies.');
    listContainer.appendChild(listTotalElement);
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
    var listContainer = document.getElementById('seaTac');
    for(var i = 0; i < timeArray.length; i++){
      var listElement = document.createElement('li');
      listElement.setAttribute('class', 'seatac-row');
      var cookiesAtHour = this.randomNumCookiesPerHour();
      this.totalCookies += cookiesAtHour;
      listElement.textContent = (timeArray[i] + ': ' + this.randomNumCookiesPerHour() + ' cookies.');
      listContainer.appendChild(listElement);
    }
    var listTotalElement = document.createElement('li');
    listTotalElement.textContent =('Total: ' + this.totalCookies + ' cookies.');
    listContainer.appendChild(listTotalElement);
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
    return Math.floor((Math.random() * ((this.maxCustomers - this.minCustomers) + 1) + this.minCustomers) * this.avgCookieSales);
  },
  generatePossibilities: function(){
    var listContainer = document.getElementById('center');
    for(var i = 0; i < timeArray.length; i++){
      var listElement = document.createElement('li');
      listElement.setAttribute('class', 'center-row');
      var cookiesAtHour = this.randomNumCookiesPerHour();
      this.totalCookies += cookiesAtHour;
      listElement.textContent = (timeArray[i] + ': ' + this.randomNumCookiesPerHour() + ' cookies.');
      listContainer.appendChild(listElement);
    }
    var listTotalElement = document.createElement('li');
    listTotalElement.textContent =('Total: ' + this.totalCookies + ' cookies.');
    listContainer.appendChild(listTotalElement);
  }
};
seattleCenter.generatePossibilities();

//Capitol Hill Location
var capitolHill = {
  minCustomers: 20,
  maxCustomers: 38,
  avgCookieSales: 2.3,
  totalCookies: 0,
  randomNumCookiesPerHour: function(){
    return Math.floor((Math.random() * ((this.maxCustomers - this.minCustomers) + 1) + this.minCustomers) * this.avgCookieSales);
  },
  generatePossibilities: function(){
    var listContainer = document.getElementById('capHill');
    for(var i = 0; i < timeArray.length; i++){
      var listElement = document.createElement('li');
      listElement.setAttribute('class', 'hill-row');
      var cookiesAtHour = this.randomNumCookiesPerHour();
      this.totalCookies += cookiesAtHour;
      listElement.textContent = (timeArray[i] + ': ' + this.randomNumCookiesPerHour() + ' cookies.');
      listContainer.appendChild(listElement);
    }
    var listTotalElement = document.createElement('li');
    listTotalElement.textContent =('Total: ' + this.totalCookies + ' cookies.');
    listContainer.appendChild(listTotalElement);
  }
};
capitolHill.generatePossibilities();

//Alki Location
var alki = {
  minCustomers: 20,
  maxCustomers: 38,
  avgCookieSales: 2.3,
  totalCookies: 0,
  randomNumCookiesPerHour: function(){
    return Math.floor((Math.random() * ((this.maxCustomers - this.minCustomers) + 1) + this.minCustomers) * this.avgCookieSales);
  },
  generatePossibilities: function(){
    var listContainer = document.getElementById('alki');
    for(var i = 0; i < timeArray.length; i++){
      var listElement = document.createElement('li');
      listElement.setAttribute('class', 'alki-row');
      var cookiesAtHour = this.randomNumCookiesPerHour();
      this.totalCookies += cookiesAtHour;
      listElement.textContent = (timeArray[i] + ': ' + this.randomNumCookiesPerHour() + ' cookies.');
      listContainer.appendChild(listElement);
    }
    var listTotalElement = document.createElement('li');
    listTotalElement.textContent =('Total: ' + this.totalCookies + ' cookies.');
    listContainer.appendChild(listTotalElement);
  }
};
alki.generatePossibilities();