  // Example array
  const numbers = [3, 5, 1, 8, 7, 3, 5, 9, 1];

  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("originalArray").textContent = numbers.join(", ");
  });

  // Find Largest Number using reduce
  function findLargest() {
    const largest = numbers.reduce((max, current) => (current > max ? current : max), numbers[0]);
    document.getElementById("result").textContent = `Largest Number: ${largest}`;
  }

  // Find Smallest Number using reduce
  function findSmallest() {
    const smallest = numbers.reduce((min, current) => (current < min ? current : min), numbers[0]);
    document.getElementById("result").textContent = `Smallest Number: ${smallest}`;
  }

  // Remove Duplicates using Map
  function removeDuplicates() {
    const uniqueMap = new Map();
    
    numbers.forEach((num) => {
      if (!uniqueMap.has(num)) {
        uniqueMap.set(num, true);
      }
    });

    const uniqueArray = Array.from(uniqueMap.keys());
    document.getElementById("result").textContent = `Array without Duplicates: ${uniqueArray.join(", ")}`;
  }
