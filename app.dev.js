"use strict";

var buttons = document.querySelectorAll('button');
var display = document.querySelector('.display');
var operationBtns = document.querySelector('.operation__btn');
var numBtns = document.querySelector('.num__btn');
var divideBtn = document.querySelector('.divide__btn');
var multiplyBtn = document.querySelector('.multiply__btn');
var minusBtn = document.querySelector('.minus__btn');
var plusBtn = document.querySelector('.plus__btn');
var clearBtn = document.querySelector('.clear__btn');
var equalsBtn = document.querySelector('.equals__btn');
var decimalBtn = document.querySelector('.decimal__btn');

var displayOnScreen = function displayOnScreen(e) {
  display.value = e.target.innerHTML;
  console.log(e.target.innerHTML);
};

buttons.forEach(function (button) {
  button.addEventListener('click', displayOnScreen);
});