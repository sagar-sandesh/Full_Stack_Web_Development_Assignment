(() => {
  'use strict';


  const year = Number(prompt('Enter a year:'));

  let message;


  if (year % 4 !== 0) {
    message = `${year} is not a leap year.`;
  } else if (year % 100 !== 0) {
    message = `${year} is a leap year.`;
  } else if (year % 400 === 0) {
    message = `${year} is a leap year.`;
  } else {
    message = `${year} is not a leap year.`;
  }


  const output = document.querySelector('#output');
  output.textContent = message;
})();
