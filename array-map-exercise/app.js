// 1. Make an array of numbers that are doubles of the first array

function doubleNumbers(arr){
 return arr.map(num => num * 2)
  
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

// 2) Take an array of numbers and make them strings

function stringItUp(arr){
    return arr.map(str => str.toString())
  }
  
  console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]
  
// 3) Capitalize the first letter of each name and make the rest of the characters lowercase

function capitalizeNames(arr){
    return arr.map(function(name){
        let first = name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase()
        return first
    })
  }
  
  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
  
  // Output:
  // ["John", "Jacob", "Jingleheimer", "Schmidt"]
  
//   4) Make an array of strings of the names

function namesOnly(arr){
    return arr.map(item =>item.name)
  }
  
  console.log(namesOnly([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
  
// **5) Make an array of strings of the names saying whether or not they can go to The Matrix**

function makeStrings(arr){
    return arr.map(item => {
        if(item.age >= 18){
            return item.name + ' can go'
        }else{
            return item.name + ' is under age'
        }
    })
  }
  
  console.log(makeStrings([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["Angelina Jolie can go to The Matrix",
  // "Eric Jones is under age!!",
  // "Paris Hilton is under age!!",
  // "Kayne West is under age!!",
  // "Bob Ziroll can go to The Matrix"]
  