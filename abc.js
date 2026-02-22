// promise class

const p = new Promise((resolve, reject) => resolve);

// promisified version of setTimeout

function setTimeoutPromisified(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

setTimeoutPromisified(1000).then(() => console.log("Its done mate!!!!!"));
