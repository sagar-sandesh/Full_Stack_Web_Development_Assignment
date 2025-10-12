(() => {
  'use strict';

  function even(numbers) {
    const evens = [];
    for (const num of numbers) {
      if (num % 2 === 0) {
        evens.push(num);
      }
    }
    return evens;
  }

  const originalArray = [2, 7, 4, 9, 12, 5, 8];

  const evenArray = even(originalArray);

output.innerHTML = `
    <p>Original array: [${originalArray.join(', ')}]</p>
    <p>Even numbers array: [${evenArray.join(', ')}]</p>
  `;
})();
