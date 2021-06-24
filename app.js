const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display1');

const displayOnScreen = (e) => {
  display.value = e.target.innerHTML
  console.log(e.target.innerHTML);
}

buttons.forEach((button) => {
  button.addEventListener ('click', displayOnScreen)
})




