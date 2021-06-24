const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
const operationBtns = document.querySelector('.operation__btn');
const numBtns = document.querySelector('.num__btn'); 
const divideBtn = document.querySelector('.divide__btn')
const multiplyBtn = document.querySelector('.multiply__btn');
const minusBtn = document.querySelector('.minus__btn');
const plusBtn = document.querySelector('.plus__btn');
const clearBtn = document.querySelector('.clear__btn');
const equalsBtn = document.querySelector('.equals__btn');
const decimalBtn = document.querySelector('.decimal__btn')


const displayOnScreen = (e) => {
  display.value = e.target.innerHTML
  console.log(e.target.innerHTML);
}

buttons.forEach((button) => {
  button.addEventListener ('click', displayOnScreen)
})



