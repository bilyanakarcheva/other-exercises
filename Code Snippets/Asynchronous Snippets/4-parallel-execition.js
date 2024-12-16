async function task(id) {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Waits for 1 second
    console.log(`Task ${id} done`); // Logs after the wait
}

async function run() {
    task(1); // Start task 1
    task(2); // Start task 2
    task(3); // Start task 3
}

run();

// Key Points:
// task is an async function:

// It returns a promise when called.
// The await inside task pauses its execution until the setTimeout promise resolves after 1 second.
// Tasks are started concurrently:

// Inside run(), you are calling task(1), task(2), and task(3) without await or chaining. This means all tasks are started concurrently (not sequentially).
// Each task starts its 1-second setTimeout timer immediately but independently.
// No order enforced:

// Since all the setTimeout calls have the same duration (1 second), the tasks will complete around the same time. However, the order of logging is unpredictable because they are running concurrently.