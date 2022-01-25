const runCallback = value => {
  return new Promise((resolve, reject) => {
    if (value % 2 === 0) {
      resolve("Correct Value: " + value);
    } else {
      reject("Error Value: " + value);
    }
  });
};

runCallback(2)
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  });

runCallback(1)
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  });

runCallback(null)
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  });

/*  Resolve and reject   */
const asyncLog = () => {
  return new Promise(resolve => {
    resolve;
  });
};

asyncLog().then(console.log("resolve"));

/* ----- Run async and race condition --------- */

const waitUntil = (duration, cb) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("called");
    }, duration);
  });
};

Promise;

const p1 = waitUntil(1000).then(resolve => {
  console.log("wait 1000ms");
});

const p2 = waitUntil(100).then(resolve => {
  console.log("wait 100ms");
});

const p3 = waitUntil(10).then(resolve => {
  console.log("wait 10ms");
});

Promise.race([p1, p2, p3]).then(res => {
  console.log("first came: ", res); // called when a promise is done
});

Promise.all([p1, p2, p3]).then(results => {
  console.log("All Done: ", results); // this is called all promises are done
});

Promise.allSettled([p1, p2, p3]).then(results => {
  console.log("All settle Done: ", results); // this is called all promises are done
});
