(() => {
  'use strict';

  const name = prompt('What is your name?') || 'Stranger';

  const output = document.querySelector('#output');
  output.textContent = `Hello, ${name}!`;
})();
