async function fetch() {
    console.log("Fetch start");
    await new Promise((resolve) => setTimeout(resolve, 0));
    console.log("Fetch end");
}

console.log("Script start");
fetch();
console.log("Script end");
