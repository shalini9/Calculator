"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var buttons = document.querySelectorAll('button');
var display = document.querySelector('.display');
var operationBtns = document.querySelectorAll('.operation__btn');
var numBtns = document.querySelectorAll('.num__btn');
var divideBtn = document.querySelector('.divide__btn');
var multiplyBtn = document.querySelector('.multiply__btn');
var minusBtn = document.querySelector('.minus__btn');
var plusBtn = document.querySelector('.plus__btn');
var clearBtn = document.querySelector('.clear__btn');
var equalsBtn = document.querySelector('.equals__btn');
var decimalBtn = document.querySelector('.decimal__btn');
var value = 0;

var displayOnScreen = function displayOnScreen(e) {
  if (value === 0) {
    value = e.target.innerHTML;
    display.value = value;
    return value;
  } else {
    value = value + e.target.innerHTML;
    display.value = value;
  }
};

buttons.forEach(function (button) {
  button.addEventListener('click', displayOnScreen);
});
clearBtn.addEventListener('click', function () {
  display.value = 0;
});
equalsBtn.addEventListener('click', function () {
  var splitDisplay = display.value.split('');
  var num1 = splitDisplay[0];
  var operation = splitDisplay[1];
  var num2 = splitDisplay[2];

  _sum(num1, operation, num2);
});

var _sum = function sum(num1, operation, num2) {
  if (operation === '+') {
    console.log(Number(num1) + Number(num2));
    return num1 + num2;
  } else if (operation === '-') {
    _sum = (_readOnlyError("sum"), num1 - num2);
  } else if (operation === '*') {
    _sum = (_readOnlyError("sum"), num1 * num2);
  } else if (operation === "/") {
    _sum = (_readOnlyError("sum"), num1 / num2);
  }

  return _sum;
};