async function fetch() {
    console.log("Fetch start");
    return "Data";
}

async function process() {
    const promise = fetch();
    console.log("Processing...");
    console.log(await promise);
}

process();
