const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
const operationBtns = document.querySelectorAll('.operation__btn');
const numBtns = document.querySelectorAll('.num__btn'); 
const divideBtn = document.querySelector('.divide__btn')
const multiplyBtn = document.querySelector('.multiply__btn');
const minusBtn = document.querySelector('.minus__btn');
const plusBtn = document.querySelector('.plus__btn');
const clearBtn = document.querySelector('.clear__btn');
const equalsBtn = document.querySelector('.equals__btn');
const decimalBtn = document.querySelector('.decimal__btn');

let value = 0;

const displayOnScreen = (e) => {
  if(value === 0) {
    value = e.target.innerHTML
    display.value = value;
    return value;
  } else {
    value = value + e.target.innerHTML
    display.value = value;
  }
}

buttons.forEach((button) => {
  button.addEventListener ('click', displayOnScreen)
})

clearBtn.addEventListener('click', () => {
  display.value = 0;
});

equalsBtn.addEventListener('click', () => {
 const splitDisplay = display.value.split('');
 const num1 = splitDisplay[0];
 const operation = splitDisplay[1];
 const num2 = splitDisplay[2];
 sum(num1, operation, num2)
});


  const sum = (num1, operation, num2) => {

  if (operation === '+'){
    console.log(Number(num1) + Number(num2));
    return num1 + num2;
  }else if (operation === '-'){
    sum = num1 - num2;
  }else if (operation === '*'){
    sum = num1 * num2;
  }else if (operation === "/"){
    sum = num1 / num2;
   }
  return sum; 
}

 

