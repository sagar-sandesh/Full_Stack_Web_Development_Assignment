(() => {
  'use strict';


  const diceCount = Number(prompt('Enter the number of dice:'));
  const desiredSum = Number(prompt('Enter the desired sum:'));

  const simulations = 10000;
  let successCount = 0;


  for (let i = 0; i < simulations; i++) {
    let total = 0;

    for (let d = 0; d < diceCount; d++) {
      total += Math.floor(Math.random() * 6) + 1;
    }

    if (total === desiredSum) {
      successCount++;
    }
  }


  const probability = (successCount / simulations) * 100;


  const output = document.querySelector('#output');
  output.textContent = `Probability to get sum ${desiredSum} with ${diceCount} dice is ${probability.toFixed(2)}%`;
})();
