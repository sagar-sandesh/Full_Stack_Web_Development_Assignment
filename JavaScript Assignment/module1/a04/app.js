(() => {
  'use strict';


  const studentName = prompt('Enter your name:') || 'Unknown Student';


  const randomNumber = Math.floor(Math.random() * 4) + 1;

  let house;


  if (randomNumber === 1) {
    house = 'Gryffindor';
  } else if (randomNumber === 2) {
    house = 'Slytherin';
  } else if (randomNumber === 3) {
    house = 'Hufflepuff';
  } else if (randomNumber === 4) {
    house = 'Ravenclaw';
  } else {
    house = 'Unknown House';
  }


  const output = document.querySelector('#output');
  output.textContent = `${studentName}, you are ${house}.`;
})();
