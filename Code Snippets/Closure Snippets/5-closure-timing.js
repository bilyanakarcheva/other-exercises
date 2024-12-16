function delayLog() {
    for (let i = 1; i <= 3; i++) {
        setTimeout(() => console.log(i), i * 1000);
    }
}

delayLog();

// The delayLog function uses a for loop to iterate three times and sets a setTimeout for each iteration. Each setTimeout is scheduled to run after i * 1000 milliseconds, so they will print the values of i with a 1-second delay between each print.

// Key points:
// The let keyword creates a block-scoped variable i for each iteration of the loop, meaning a new i is created with each iteration, and it is correctly captured by the arrow function inside setTimeout.
// The arrow function inside the setTimeout will access the value of i for that specific iteration.
// Here's how the loop works:
// First iteration (i = 1):

// setTimeout(() => console.log(i), 1 * 1000) is called, which will log 1 after 1 second.
// Second iteration (i = 2):

// setTimeout(() => console.log(i), 2 * 1000) is called, which will log 2 after 2 seconds.
// Third iteration (i = 3):

// setTimeout(() => console.log(i), 3 * 1000) is called, which will log 3 after 3 seconds.