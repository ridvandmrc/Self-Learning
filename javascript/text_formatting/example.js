// Definition of string

const firstWay = "2+2";
const secondWay = new String("2+2");

console.log(eval(firstWay)); // return 4
console.log(eval(secondWay)); // return '2+2'

console.log("ridvan ".repeat(5)); // repeat string x times

// try list example

/* const listWrapper = document.createElement("ul");
listWrapper.innerHTML = "<li> sample item </li>".repeat(5);
document.body.appendChild(listWrapper); */

// regular expression

const expression = /2\+2/;

console.log("asd21sd".match(expression));

console.log("as2+2sd".match(expression)); // return first only one matching

console.log("as2+2sddas2+2".match(expression)); // return first only one matching

const matches = [..."asd2+2sddas2+2".matchAll(expression)];

console.log(matches[0]);

// Number formatting

const gasPrice = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 3
});
console.log(gasPrice.format(4.5));

// do example that convert Tl to Dollar

const convertTlToDollar = new Intl.NumberFormat("en-us", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 3
});

console.log(convertTlToDollar.format(3))