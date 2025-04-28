    // --- Callback Example ---

    // A function that accepts a callback
    function greetUser(name, callback) {
      console.log("Hello, " + name + "!");
      callback(); // Call the callback function
    }

    // Simple callback function
    function welcomeMessage() {
      console.log("Welcome to our website!");
    }

    document.getElementById('greetBtn').addEventListener('click', () => {
      greetUser('Priya', welcomeMessage); // Passing welcomeMessage as callback
    });


    // --- Closure Example ---

    // Outer function that creates a private counter
    function createCounter() {
      let counter = 0; // Private variable

      // Inner function (closure) that updates and shows the counter
      return function() {
        counter++;
        document.getElementById('counterValue').textContent = "Counter: " + counter;
      };
    }

    const incrementCounter = createCounter(); // Create a closure

    document.getElementById('countBtn').addEventListener('click', () => {
      incrementCounter(); // Each click remembers the updated counter
    });