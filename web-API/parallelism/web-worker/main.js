const worker = new Worker("./web-worker.js");
let counter = 0;

setBackground = () => {
  const body = document.body;
  counter++;

  console.log("counter: ", counter);

  switch (counter % 3) {
    case 0:
      body.style.background = "red";
      break;
    case 1:
      body.style.background = "blue";
      break;
    case 2:
      body.style.background = "yellow";
  }
};

calculate = () => {
  worker.postMessage(5_000_000_000);
};

worker.onmessage = (data) => {
  alert(`Sum: ${data.data}`);
};
