function capilizeAndLowercase(string) {
  let lower = string.toLowerCase();
  let upper = string.toUpperCase();
  return upper.concat(lower);
} // => "HELLOhello"

console.log(capilizeAndLowercase("HelLo")); // => "HELLOhello"

function findMiddleIndex(string) {
  let result = Math.floor(string.length / 2);
  return result;
}
console.log(findMiddleIndex("tesst"));

function returnFirstHalf(string) {
  let result = string.length / 2;

  return string.slice(0, result);
}
console.log(returnFirstHalf("hello"));

function capilizeAndLowercase(string) {
  let result = Math.floor(string.length / 2);
  //   string.slice(0, result);

  let first = string.toUpperCase().slice(0, result);
  let fl = first.length;
  let second = string.toLowerCase().slice(fl);
  return first.concat(second);
}
console.log(capilizeAndLowercase("abcdefghijabcdefghija"));

function capitalize(string) {
  let arr = string.split(" ");
  let newArr = [];

  for (i = 0; i < arr.length; i++) {
    let start = arr[i].slice(0, 1).toUpperCase();
    let end = arr[i].slice(1);
    let word = start.concat(end);
    newArr.push(word);
  }
  // console.log(newArr.join(' '));
  return newArr.join(" ");
}
console.log(capitalize("hey friends! practice practice practice!"));
