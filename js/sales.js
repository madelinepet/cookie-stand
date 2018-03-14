'use strict';

var timeArray = ['6am', '7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var storesArray = [];
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
  var dayTotal = 0;
  storesArray.push(this);
  //for loop is in here now so it iterates for each time I use this constructor(it used to be outside)
  for(var i = 0; i < timeArray.length; i++){
    var randomNumCookiesPerHour = Math.floor((Math.random() * (this.maxCustomers-this.minCustomers) + this.minCustomers) * this.avgCookieSales);
    this.hourlySalesArray.push(randomNumCookiesPerHour);
  }
}

//render a a table
Stores.prototype.renderTable = function (){
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

    this.randomNumCookiesPerHour += this.daytotal;
  }
  //create cell that says total
  tdElement = document.createElement('td');
  //give content
  tdElement.textContent = 'total';
  //apend to row 
  trElement.appendChild(tdElement);
  //append tr to table
  storesTable.appendChild(trElement);
//outside of method above's for loop, generate total for day 

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
    
    thElement.textContent = timeArray[i];
    //append td to tr: put cell onto row before appending whole row
    headerTrElement.appendChild(thElement);
  }
  //append tr to table
  storesTable.appendChild(headerTrElement);
}
//create a footer
function makeFooterRow(){
  var footerTrElement = document.createElement('tr');
  var footerThElement = document.createElement('th');
  footerThElement.textContent = 'Total';
  //append td to tr: put cell onto row before appending whole row
  footerTrElement.appendChild(footerThElement);
  //append tr to table
  storesTable.appendChild(footerTrElement);
  //set a counter to zero so I can add contents of hourlysalesarray to it in the for loop
  var counter = 0;
  for(var i = 0; i < timeArray.length; i++){
    //add contents of hourlysalesarray
    var total = (counter += this.hourlySalesArray[i]);
    //create td
    footerThElement = document.createElement('th');
    //give td the content that is the total
    footerThElement.textContent = total;
    console.log(total);
    //append
    footerTrElement.appendChild(footerThElement);
  }
}

//call functions, starting with above header row fn, followed by rendering each object
makeHeaderRow();
pike.renderTable();
seaTac.renderTable();
center.renderTable();
hill.renderTable();
alki.renderTable();
makeFooterRow();
