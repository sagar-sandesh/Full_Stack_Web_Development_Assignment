(() => {
  'use strict';

  function concat(array) {
    let result = '';
    for (const item of array) {
      result += item;
    }
    return result;
  }

  const names = ['Johnny', 'DeeDee', 'Joey', 'Marky'];

  const concatenatedString = concat(names);

  const output = document.querySelector('#output');
  output.textContent = concatenatedString;
})();
