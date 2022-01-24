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
