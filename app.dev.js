"use strict";

var buttons = document.querySelectorAll('button');
var display = document.querySelector('.display1');

var displayOnScreen = function displayOnScreen(e) {
  display.value = e.target.innerHTML;
  console.log(e.target.innerHTML);
};

buttons.forEach(function (button) {
  button.addEventListener('click', displayOnScreen);
});