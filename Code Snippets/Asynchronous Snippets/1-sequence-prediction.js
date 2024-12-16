async function task() {
    console.log("Start task");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Task complete");
}

console.log("Before task");
task();
console.log("After task");
