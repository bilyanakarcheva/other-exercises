function createFunctions() {
    const functions = [];
    for (var i = 0; i < 3; i++) {
        functions.push(() => i);
    }
    return functions;
}

const funcs = createFunctions();
console.log(funcs[0]()); // 3
console.log(funcs[1]()); // 3
console.log(funcs[2]()); // 3

// Explanation:
// In your createFunctions() function, you're using var to declare the variable i. The issue with var is that it has function scope (or global scope, if not inside a function), meaning that the variable i is shared across all iterations of the loop and is accessible outside of the loop as well. Because of this, the value of i is not captured at each iteration; instead, all the functions in the functions array reference the same variable i, which ends up having the value 3 after the loop finishes (since i is incremented three times).

// Step-by-Step Execution:
// i starts at 0 and the loop iterates.
// For each iteration, you're pushing a function () => i into the functions array.
// However, none of these functions capture the value of i at the time they were created. They all refer to the same i variable.
// After the loop finishes, i becomes 3, and when you call each function, it references i, which is 3.
// To fix this and capture the value of i at each iteration, you can use let instead of var. The let keyword creates a new block-scoped variable for each iteration.


function createFunctions2() {
    const functions = [];
    for (let i = 0; i < 3; i++) {  // Use 'let' instead of 'var'
        functions.push(() => i);
    }
    return functions;
}

const funcs2 = createFunctions2();
console.log(funcs2[0]());  // 0
console.log(funcs2[1]());  // 1
console.log(funcs2[2]());  // 2


// Step-by-Step Execution of the Loop:
// First iteration (i = 0):

// A new block-scoped variable i is created with the value 0.
// The anonymous function () => i is created and pushed into the functions array. This function "remembers" that i is 0 in this iteration.
// Second iteration (i = 1):

// A new block-scoped variable i is created with the value 1.
// The anonymous function () => i is created again and pushed into the functions array. This function "remembers" that i is 1 in this iteration.
// Third iteration (i = 2):

// A new block-scoped variable i is created with the value 2.
// The anonymous function () => i is created once more and pushed into the functions array. This function "remembers" that i is 2 in this iteration.
// Returning the array:

// After the loop finishes, the functions array contains three functions. Each of these functions "remembers" the value of i at the time it was created, because of how let works.
// Calling the functions:

// Now, when you call funcs[0](), it returns the value of i from the first iteration, which is 0.
// Similarly, calling funcs[1](), it returns the value of i from the second iteration, which is 1.
// And calling funcs[2](), it returns the value of i from the third iteration, which is 2.
// Key Concept:
// With let, each iteration of the loop creates a new block-scoped variable, so each function that’s pushed into the array "captures" its own unique value of i at that time. As a result, when you call these functions later, they correctly return the value of i at the time the function was created.