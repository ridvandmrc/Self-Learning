const example1 = async () =>
  new Promise((resolve, err) => {
    setTimeout(() => {
      return resolve("after 2 sec");
    }, 2000);
  });

const foo = () => {
  example1().then((data) => console.log("data :", data)); // run the function async
  console.log("continue");
};

const fooSync = async () => {
  await example1().then((data) => console.log("await data :", data)); // wait until result

  console.log("continue");
};

foo();

fooSync();
