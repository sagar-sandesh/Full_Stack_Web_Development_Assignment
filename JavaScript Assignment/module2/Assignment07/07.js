(() => {
  'use strict';

  function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
  }

  const sides = Number(prompt('Enter the number of sides on the dice:'));

  const ul = document.createElement('ul');
  let result;

  do {
    result = rollDice(sides);

    const li = document.createElement('li');
    li.textContent = `Rolled: ${result}`;
    ul.appendChild(li);
  } while (result !== sides);

  const output = document.querySelector('#output');
  output.appendChild(ul);
})();
