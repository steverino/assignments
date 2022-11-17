for (i = 0; i < 10; i++) {
  console.log(i);
}

console.log("------------------");

for (i = 9; i >= 0; i--) {
  console.log(i);
}

const fruit = ["banana", "orange", "apple", "kiwi"];
for (i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}

arr = [];
for (i = 0; i < 10; i++) {
  arr.push(i);
}
console.log(arr);

console.log("-------Push Names------------");
const peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor",
  },
  {
    name: "Justin Bieber",
    occupation: "Singer",
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician",
  },
  {
    name: "Oprah",
    occupation: "Entertainer",
  },
];

// ["Harrison Ford", "Vladimir Putin"] // names
// ["Singer", "Entertainer"] // occupations

let names = [];
let occupations = [];
let oddNames = [];
let evenOccupations = [];

for (i = 0; i < peopleArray.length; i++) {
  names.push(peopleArray[i].name);
  occupations.push(peopleArray[i].occupation);

  if (i % 2 == 0) {
    oddNames.push(names[i]);
  }

  if (i % 2 != 0) {
    evenOccupations.push(occupations[i]);
  }
}
console.log(names);
console.log(occupations);

console.log(oddNames);
console.log(evenOccupations);

console.log("--------Gold Arrays---------");

const newArr = [];
const newArr1 = [];
const newArr2 = [];
let lgArr = [];
let lgArr1 = [];
let lgArr2 = [];

const size = 3;

for (let i = 0; i < size; i++) {
  newArr.push(0);
  newArr1.push(0 + 1);
  newArr2.push(0 + 2);

  for (let i = 0; i < size; i++) {}
}
lgArr.push(newArr, newArr, newArr);
lgArr1.push(newArr, newArr1, newArr2);

console.log(lgArr, lgArr1);
// console.log(arr2);
