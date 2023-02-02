// for (i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log("------------------");

// for (i = 9; i >= 0; i--) {
//   console.log(i);
// }

// const fruit = ["banana", "orange", "apple", "kiwi"];
// for (i = 0; i < fruit.length; i++) {
//   console.log(fruit[i]);
// }

// arr = [];
// for (i = 0; i < 10; i++) {
//   arr.push(i);
// }
// console.log(arr);

// console.log("-------Push Names------------");
// const peopleArray = [
//   {
//     name: "Harrison Ford",
//     occupation: "Actor",
//   },
//   {
//     name: "Justin Bieber",
//     occupation: "Singer",
//   },
//   {
//     name: "Vladimir Putin",
//     occupation: "Politician",
//   },
//   {
//     name: "Oprah",
//     occupation: "Entertainer",
//   },
// ];

// ["Harrison Ford", "Vladimir Putin"] // names
// ["Singer", "Entertainer"] // occupations

// let names = [];
// let occupations = [];
// let oddNames = [];
// let evenOccupations = [];

// for (i = 0; i < peopleArray.length; i++) {
//   names.push(peopleArray[i].name);
//   occupations.push(peopleArray[i].occupation);

//   if (i % 2 == 0) {
//     oddNames.push(names[i]);
//   }

//   if (i % 2 != 0) {
//     evenOccupations.push(occupations[i]);
//   }
// }
// console.log(names);
// console.log(occupations);

// console.log(oddNames);
// console.log(evenOccupations);

console.log("--------Gold Arrays---------");

arr = [];
zeroArr = [];
oneArr = [];
twoArr = [];
innerArr = [];
outerArr = [];
allArr = [];

// console.log(outerArr.push(0));
// console.log(outerArr);

for (let i = 0; i < 1; i++) {
  for (let j = 0; j < 3; j++) {
    zeroArr.push(i);
    oneArr.push(i + 1);
    twoArr.push(i + 2);
    allArr.push(j);
    
    outerArr.push(zeroArr);
    arr.push(allArr)
    
  }
  innerArr.push(zeroArr,oneArr,twoArr)
}

console.log(outerArr);
console.log(innerArr);
console.log(arr);
