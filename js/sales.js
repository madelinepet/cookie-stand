'use strict';

//create first object
var firstAndPike = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookieSales: 6.3,
  timeArray: ['6am', '7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  //Next line is just an idea
  //randomPossibility: Math.floor(Math.random() * 10 * this.avgCookieSales),
  // function: ,
  generatePossibilities: function(){
    var firstAndPikeContainer = document.getElementById('stores');
    for(var i=0; i<this.timeArray.length; i++){

      var storeElement = document.createElement('li');
      storeElement.textContent = ('At First and Pike, at ' + this.timeArray[i] + ' there might be as many as '+ this.maxCustomers + ' customers and as few as ' + this.minCustomers + ' customers and the average cookie sales is ' + this.avgCookieSales + '. The random possibility of cookies sold for this hour is: ' + this.randomPossibility);
      firstAndPikeContainer.appendChild(storeElement);
    }
  }
};
firstAndPike.generatePossibilities();

//questions
//how do I generate a different random num for each hour? Between certain constraints?
//why NaN?
