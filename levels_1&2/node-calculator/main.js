const readline = require("readline-sync");

const add = function (num1, num2) {
  return num1 + num2;
};
// console.log(add(1,2));

const sub = function (num1, num2) {
  return num1 - num2;
};
// console.log(subtract(1,2));

const mul = function (num1, num2) {
  return num1 * num2;
};
// console.log(multiply(1,2));

const div = function (num1, num2) {
  return num1 / num2;
};
// console.log(divide(1,2));

let q1 = readline.question("Please enter your first number: ");
q1 = Number(q1);
// console.log(Number(q1));

let q2 = readline.question("Please enter your second number: ");
q2 = Number(q2);
// console.log(Number(q2));

let operation = readline.question(
  "Please enter the operation to perform: add,sub,mul,div "
);

let total = eval(operation)(q1, q2);

if (
  operation === "add" ||
  operation === "sub" ||
  operation === "mul" ||
  operation === "div"
) {
	console.log('The Result is: ' + total);
  
} else {
  console.log("Please enter one of the options add,sub,mul,div");
}
// if (operation === "add") {
//   console.log(add(q1, q2));
// } else if (operation === "sub") {
//   console.log(sub(q1, q2));
// } else if (operation === "mul") {
//   console.log(mul(q1, q2));
// } else if (operation === "div") {
//   console.log(div(q1, q2));
// } else {
//   console.log("Please enter on of the options add,sub,mul,div");
// }