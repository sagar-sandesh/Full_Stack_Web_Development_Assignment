(() => {
  'use strict';

  const dogNames = [];

  for (let i = 0; i < 6; i++) {
    const name = prompt(`Enter the name of dog ${i + 1}:`);
    dogNames.push(name);
  }

  dogNames.sort().reverse();


  const ul = document.createElement('ul');

  for (const name of dogNames) {
    const li = document.createElement('li');
    li.textContent = name;
    ul.appendChild(li);
  }


  const output = document.querySelector('#output');
  output.appendChild(ul);
})();
