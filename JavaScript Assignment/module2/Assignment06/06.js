(() => {
  'use strict';

  function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }

  const ul = document.createElement('ul');
  let result;

  do {
    result = rollDice();

    const li = document.createElement('li');
    li.textContent = `Rolled: ${result}`;
    ul.appendChild(li);
  } while (result !== 6);

  const output = document.querySelector('#output');
  output.appendChild(ul);
})();
