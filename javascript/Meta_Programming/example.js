// most import attributes for proxy
// trap: default defined methods for object (set, get and has)
// handler: replaced function with default one
// target: target property that is exposed

const myRealObject = {
  name: "Ridvan",
  surname: "Demirci",
  age: 26,
  nationalNumber: "13212312123",
  role: "staff"
};

const proxyMyRealObject = new Proxy(myRealObject, {
  get: (object, attr) => {
    // you can see national number if role is admin
    if (attr === "nationalNumber" && object.role !== "admin")
      throw Error("You can not see national number");
    return object[attr];
  },
  set: (object, attr, value) => {
    // you can not set national number unless you are admin
    if (attr === "nationalNumber" && object.role !== "admin")
      throw Error("You can not set");
    else if (attr === "nationalNumber" && value.length !== 11) {
      throw Error("Length of number should be 11");
    }

    object[attr] = value;
  },
  has: (obj, attr) => {
    if (attr === "nationalNumber" && obj.role !== "admin")
      throw Error("You can not check this attr unless you are not admin");

    return attr in obj;
  }
});

try {
  console.log("nationalNumber" in proxyMyRealObject);
} catch (err) {
  console.log(err);
}

try {
  console.log(proxyMyRealObject.nationalNumber);
} catch (e) {
  console.log(e);
}

proxyMyRealObject.role = "admin";
console.log("nationalNumber" in proxyMyRealObject);
console.log(proxyMyRealObject.nationalNumber);
try {
  proxyMyRealObject.nationalNumber = "11";
} catch (err) {
  console.log(err);
}

try {
  proxyMyRealObject.nationalNumber = "23413212321";
} catch (err) {
  console.log(err);
}

console.log(proxyMyRealObject.nationalNumber);
