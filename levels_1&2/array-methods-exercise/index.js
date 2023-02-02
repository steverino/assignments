let fruit = ["banana", "apple", "orange", "watermelon"];
let vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop()

fruit.shift()

orangeIndex = fruit.indexOf("orange")
fruit.push(orangeIndex)
vegetablesLength = vegetables.length;

vegetables.push(vegetablesLength)

let food = []
// food.push(fruit,vegetables)// [[fruit], [vegetables]]
food = fruit.concat(vegetables)

console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);
console.log("Orange index: "+ orangeIndex); 
console.log(food);

food.splice(4,2)
food.reverse()
let foodJoined = food.join()

console.log(foodJoined);
