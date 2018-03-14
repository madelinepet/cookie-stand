'use strict';

var timeArray = ['6am', '7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

//create a table
var storesTable = document.getElementById('stores');

//constructor function
//use cap first letter for fn name, pass in params that need to be unique for each
function Stores(locationName, minCustomers, maxCustomers, avgCookieSales) {
  //start by listing unique variabl es using this keyword, use = instead of :
  this.locationName = locationName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookieSales = avgCookieSales;
  this.hourlySalesArray = [];
  //for loop is in here now so it iterates for each time I use this constructor
  for(var i = 0; i < timeArray.length; i++){
    var randomNumCookiesPerHour = Math.floor((Math.random() * (this.maxCustomers-this.minCustomers) + this.minCustomers) * this.avgCookieSales);
    this.hourlySalesArray.push(randomNumCookiesPerHour);
  }
}
//generateTable method
Stores.prototype.generateTable = function (){
  // this.generateHourlySales();
  //create tr
  var trElement = document.createElement('tr');
  //create td
  var tdElement = document.createElement('td');
  //give td content
  tdElement.textContent = this.locationName;
  trElement.appendChild(tdElement);

  for(var i = 0; i < timeArray.length; i++) {
    //create td
    tdElement = document.createElement('td');
    //give td content
    tdElement.textContent = this.hourlySalesArray[i];

    //append td to tr: put cell onto row before appending whole row
    trElement.appendChild(tdElement);
  }
  //append tr to table
  storesTable.appendChild(trElement);
//outside of method above's for loop, generate total
//end of generateTable
};

//create new instances with params to make each object unique
var pike = new Stores('First and Pike', 23, 65, 6.3);
var seaTac= new Stores('SeaTac', 3, 24, 1.2);
var center= new Stores('Seattle Center', 11, 38, 3.7);
var hill= new Stores('Capitol Hill', 20, 28, 2.3);
var alki= new Stores('Alki', 2, 16, 4.6);

//make new function to make a header row
function makeHeaderRow(){
  //make a blank cell at top left
  var headerTrElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = '';
  headerTrElement.appendChild(thElement);
  for(var i = 0; i < timeArray.length; i++){
    //create td
    thElement = document.createElement('th');
    //give td content
    console.log(this);
    thElement.textContent = timeArray[i];
    //append td to tr: put cell onto row before appending whole row
    headerTrElement.appendChild(thElement);
  }
  //append tr to table
  storesTable.appendChild(headerTrElement);
}

//call functions, starting with above header row fn, followed by rendering each object
makeHeaderRow();
pike.generateTable();
seaTac.generateTable();
center.generateTable();
hill.generateTable();
alki.generateTable();
