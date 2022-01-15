const log = exp => {
  console.log(!Boolean(exp));
};

// Below types are referred falsy

log(false); // return true
log(0); // return true
log(undefined); // return true
log(NaN); // return true
log(); // return true
log(""); // return true

// Exception Handling

const generalExceptionModel = (message, errorCode) => {
  return {
    message,
    errorCode
  };
};

try {
  throw generalExceptionModel("error while connect to DB", 502);
} catch (e) {
  console.log(e);
}
