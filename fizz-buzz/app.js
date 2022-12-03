let fizz = "Fizz";
let buzz = "Buzz";
let fizzbuzz = "FIZZBUZZ";
let countf = 1;
let countb = 1;
let countfb = 1;
let arrFb = [];
let Fizz;
let Buzz;
let FizzBuzz;

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arrFb.push(fizzbuzz);
      FizzBuzz = countfb++;
    } else if (i % 5 == 0) {
      arrFb.push(buzz);
      Buzz = countb++;
    } else if (i % 3 == 0) {
      arrFb.push(fizz);
      Fizz = countf++;
    } else {
      arrFb.push(i);
    }
  }
}
fizzBuzz();

function myObj() {
  let newobj = {
    "Fizz ": Fizz,
    "Buzz ": Buzz,
    'FizzBuzz': FizzBuzz,
  };
  console.log(newobj);
  return newobj;
}
myObj();
