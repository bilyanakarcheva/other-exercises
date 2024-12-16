function outerFunction(x) {
    return function innerFunction(y) {
        return function deepestFunction(z) {
            return x + y + z;
        };
    };
}

const calculate = outerFunction(2)(3);
console.log(calculate(4)); // 9

// 1. outerFunction(2): When you call outerFunction(2), it returns the innerFunction(y), which is a closure that has access to x = 2.

// 2. innerFunction(3): Then, calling innerFunction(3) returns the deepestFunction(z), which is another closure that has access to both x = 2 and y = 3.

// 3. deepestFunction(4): Finally, calling deepestFunction(4) adds the value of z = 4 to x = 2 and y = 3, so the result is 2 + 3 + 4 = 9.

// So, when you console.log(calculate(4)), the output will indeed be 9.

// This demonstrates closure because the inner functions (innerFunction and deepestFunction) can still access the variables from their outer functions (outerFunction and innerFunction), even after they've been executed.
