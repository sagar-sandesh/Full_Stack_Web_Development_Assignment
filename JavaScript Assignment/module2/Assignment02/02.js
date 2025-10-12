(() => {
  'use strict';


  const participantCount = Number(prompt('Enter the number of participants:'));
  const participants = [];


  for (let i = 0; i < participantCount; i++) {
    const name = prompt(`Enter the name of participant ${i + 1}:`);
    participants.push(name);
  }


  participants.sort();

  const ol = document.createElement('ol');

  for (const name of participants) {
    const li = document.createElement('li');
    li.textContent = name;
    ol.appendChild(li);
  }

  const output = document.querySelector('#output');
  output.appendChild(ol);
})();
