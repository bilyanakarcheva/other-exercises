async function fetchData() {
    throw new Error("Oops!");
}

async function run() {
    try {
        await fetchData();
        console.log("Success");
    } catch (error) {
        console.log("Caught:", error.message);
    }
}

run();
