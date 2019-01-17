'use strict';

var timeArray = ['6am', '7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var totalTotalsArr = [];

//create array to push all stores into
var storesArray = [];

//create a table
var storesTable = document.getElementById('stores');

//define global variable store form
var newStore = document.getElementById('newStore');

//constructor function
//use cap first letter for fn name, pass in params that need to be unique for each
function Stores(locationName, minCustomers, maxCustomers, avgCookieSales) {
  //start by listing unique variabl es using this keyword, use = instead of :
  this.locationName = locationName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookieSales = avgCookieSales;
  this.hourlySalesArray = [];
  this.dayTotal = 0;
  this.acrossLocs = 0;
  this.totalTotal = 0;
  storesArray.push(this);
}

//move for loop out of constructor
Stores.prototype.randomNumCookiesPerHour= function (){
  for(var i = 0; i < timeArray.length; i++){
    var randomNumCookies = Math.floor((Math.random() * (this.maxCustomers-this.minCustomers) + this.minCustomers) * this.avgCookieSales);
    this.hourlySalesArray.push(randomNumCookies);
  }
};

//render a table
Stores.prototype.renderTable = function (){
  this.randomNumCookiesPerHour();

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

    //incriment daytotal
    this.dayTotal += this.hourlySalesArray[i];
  }
  totalTotalsArr.push(this.dayTotal);
  //show total on right side
  tdElement = document.createElement('td');
  tdElement.textContent = this.dayTotal;
  trElement.appendChild(tdElement);
  //append row to table
  storesTable.appendChild(trElement);
};

//create new instances with params to make each object unique
new Stores('First and Pike', 23, 65, 6.3);
new Stores('SeaTac', 3, 24, 1.2);
new Stores('Seattle Center', 11, 38, 3.7);
new Stores('Capitol Hill', 20, 28, 2.3);
new Stores('Alki', 2, 16, 4.6);

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
  //create cell that says total- this needs to go in header to only be added into top row
  var lastThElement = document.createElement('th');
  //give content
  lastThElement.textContent = 'Total for Day at Location';
  //apend to row
  headerTrElement.appendChild(lastThElement);
  //append tr to table
  storesTable.appendChild(headerTrElement);
}
//create a footer
function makeFooterRow(){
  var footerTrElement = document.createElement('tr');
  var footerThElement = document.createElement('th');
  footerThElement.textContent = 'Total for Hour Across Locations';
  //append td to tr: put cell onto row before appending whole row
  footerTrElement.appendChild(footerThElement);
  //do not use i and k in the future. Descriptive variables can be more helpful.
  for(var i = 0; i < timeArray.length; i++){
    var hourTotalSales = 0;
    // var totalTotal = 0;
    for(var k = 0; k < storesArray.length; k++ ){
      hourTotalSales += storesArray[k].hourlySalesArray[i];
      // console.log('hour total', hourTotalSales);
      // totalTotal += hourTotalSales;
      // console.log('totalTotal', totalTotal);

    }
    //create td
    var footerTdElement = document.createElement('td');

    //give td the content that is the total for the day across all locations
    footerTdElement.textContent = hourTotalSales;

    //append td to tr
    footerTrElement.appendChild(footerTdElement);
  }
  //create bottom right cell
  footerThElement = document.createElement('th');

  //give content that is sum of totals
  var totalTotal = 0;
  for(i=0; i<totalTotalsArr.length; i++) {
    totalTotal += totalTotalsArr[i];
  }

  footerThElement.textContent = totalTotal;
  //append to row
  footerTrElement.appendChild(footerThElement);
  //append tr to table
  storesTable.appendChild(footerTrElement);
}

//single function to call all store rows
function renderAllStores (){
  for(var i in storesArray){
    storesArray[i].renderTable();
  }
}

//event listener's callback function
function addNewStore(event){
  //need to stop the button from refreshing which is the default behavior instead of submitting
  event.preventDefault();

  //these lines "drill" into the specific inputs for each form field box. After event.target, the next part (eg storeName) comes from the HTML name on the input element
  var newName= event.target.storeName.value;
  var newMinCust = event.target.minCust.value;
  var newMaxCust= event.target.maxCust.value;
  var newAvgCookiesPerCust= event.target.avgCookiesPerCust.value;

  //this line creates a new store instance using the Stores constructor function with the arguments as variables that are defined in the block above
  new Stores(newName, newMinCust, newMaxCust, newAvgCookiesPerCust);

  //these lines reset the table content to blank so it can rebuild the table after the input is added so the new store on the new row is above the header
  storesTable.innerHTML = '';
  makeHeaderRow();
  renderAllStores();
  makeFooterRow();
}

//event listener. Global var newStore defined at the top. Gets HTML element by ID. Then on submit, event is sent through the addNewStore function.
newStore.addEventListener('submit', addNewStore);


//call functions
makeHeaderRow();
renderAllStores();
makeFooterRow();
