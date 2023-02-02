// var array = [3 , 6, 2, 56, 32, 5, 89, 32];
// var largest= 0;

// for (i=0; i<array.length; i++){
//     if (array[i]>largest) {
//         largest=array[i];
//     }
// }

// console.log(largest);

// Problem 2
let myArray = ["#3", "$$$", "C%4!", "Hey!"];

let char = "!";
newArr = [];

function words(arr, char) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(char)) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
}
words(myArray, char);

// Problem 3

function isDivisible(num1, num2) {
  let result = Boolean;
    if (num1 % num2 === 0) {
    result = true
  } else {
    result = false
  }
  return result
}

// isDivisible(4, 3);
console.log(isDivisible(4, 3))
