onmessage = (ev) => {
  let sum = 0;
  const max = ev.data;
  for (let index = 0; index < max; index++) {
    sum += index;
  }
  postMessage(sum);
};
