function outer() {
    let counter = 0;
    return function inner() {
        counter++;
        console.log(counter);
    };
}

const increment = outer(); // since we run the outer function for the first time,
// we assign the it's return, which is the inner function to the increment variable.
increment();
increment();
increment();

// Result printed:
// 1
// 2
// 3

// 1. outer() is called:
// - The outer function is executed and creates:
//   - A local variable counter initialized to 0.
//   - An inner function inner() that increments counter and logs its value.
// - The outer() function returns the inner() function, which closes over the counter variable.
//   - Closure: The inner() function "remembers" the counter variable even after outer() has finished executing.
// - At this point, increment holds a reference to the inner() function with access to the counter variable.
