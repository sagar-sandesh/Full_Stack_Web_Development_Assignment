(() => {
  'use strict';


  const shouldCalculate = confirm('Should I calculate the square root?');

  const output = document.querySelector('#output');

  if (shouldCalculate) {

    const number = Number(prompt('Enter a number:'));

    if (number < 0) {
      output.textContent = 'The square root of a negative number is not defined';
    } else {
      const result = Math.sqrt(number);
      output.textContent = `The square root of ${number} is ${result}`;
    }
  } else {
    output.textContent = 'The square root is not calculated.';
  }
})();
