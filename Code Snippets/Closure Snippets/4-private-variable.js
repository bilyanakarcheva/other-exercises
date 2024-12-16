function secretBox() {
    let secret = "hidden";
    return {
        getSecret: () => secret,
        setSecret: (newSecret) => (secret = newSecret),
    };
}

const box = secretBox();
console.log(box.getSecret());
box.setSecret("revealed");
console.log(box.getSecret());


// Here's the breakdown of how the secretBox function works:

// Closure: The secretBox function defines a variable secret within its scope, and the returned object has two methods: getSecret and setSecret. These methods form a closure over the secret variable, meaning they can access and modify the secret even after secretBox has finished executing.

// getSecret(): When you call box.getSecret(), it returns the value of secret, which is initially "hidden".

// setSecret(newSecret): When you call box.setSecret("revealed"), it updates the value of secret to "revealed".

// getSecret() again: After the update, when you call box.getSecret() again, it returns the new value of secret, which is "revealed".