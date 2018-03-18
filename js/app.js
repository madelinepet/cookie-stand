'use strict';


var shirtOrder= document.getElementById('shirtOrder');
var cookieCutterOrder = document.getElementById('cookieCutterOrder');

//Without this next function, the alert displayed on page load
function thanks() {
  event.preventDefault();
  alert('Thank you for your order!');
}

shirtOrder.addEventListener('submit', thanks);
cookieCutterOrder.addEventListener('submit', thanks);