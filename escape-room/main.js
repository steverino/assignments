// Write a game that lets a user escape a room.
// The character finds him/herself locked in a room.
// In order to escape the room, your character needs to find the key
// in the room and then open the door.

// There's also a hole in the wall in the room.
// If your character puts his hand in the hole, he dies.

// Tell the user their options:

// 1. Put hand in hole
// 2. Find the key, or
// 3. Open the door
// They can't open the door unless they find the key first.They die if they put their hand in the hole.

let readlineSync = require("readline-sync");
// import readlineSync from 'readline-sync';

console.log("You are in a room");
console.log("What would you like to do?");
options = ["Look around", "Cry"];
index = readlineSync.keyInSelect(options, "Which choice?");
choice1(index);
// console.log('OK ' + options[index] + ' chosen');
function choice1(e) {
  switch (e) {
    case 0:
      console.log("You look around the room and see a door and a small hole");
      options = ["Try opening door", "Look in hole"];
      index = readlineSync.keyInSelect(options, "Which choice?");
      choice2(index);
      break;
    case 1:
      console.log(
        "You begin to cry and can't stop. The room starts filling with tears"
      );
      options = ["Try opening door", "Look in hole"];
      index = readlineSync.keyInSelect(options, "Which choice?");
      choice2(index);
      break;
    default:
  }
}
function choice2(e) {
  switch (e) {
    case 0:
      console.log("You try opening the door, but it is locked!");
      options = ["Search the room", "Reach into the hole"];
      index = readlineSync.keyInSelect(options, "Which choice?");
      choice3(index);
      break;
    case 1:
      console.log(
        "You peer into the dark hole and see nothing. A feeling of dread comes over you."
      );
      options = ["Search the room", "Reach into the hole"];
      index = readlineSync.keyInSelect(options, "Choose wisely");
      choice3(index);
      break;
    default:
      console.log("default");
  }
}

function choice3(e) {
  switch (e) {
    case 0:
      console.log("You look around the room and find a key");
      options = ["Unlock the door", "Swallow the key"];
      index = readlineSync.keyInSelect(options, "The choice is yours");
      choice4(index);
      break;
    case 1:
      console.log(
        "You reach into the hole. Fauci jabs you with the Covid-19 vaccine and your heart fails. You have died!!!"
      );
      options = [
        "Restart your escape",
        "Give up and do something constructive",
      ];
      index = readlineSync.keyInSelect(options, "Choose your path");
      if(index == 0){
        choice1(0);
      }else{
        return
      }
      break;
    default:
  }
}
function choice4(e) {
  switch (e) {
    case 0:
      console.log("You got out the room. You are in a hallway...");
      options = ["Go back into the room", "Wait for the next chapter"];
      index = readlineSync.keyInSelect(options, "Choose an option");
      if(index == 0){
      choice1(index);
    }else{
      choice5(1)
    }
      break;
    case 1:
      console.log(
        "You're choking on the key, you thrust your hand into the hole to end things quickly."
      );

      break;
    default: {
      
      return;
    }
  }
}

function choice5(e) {
  if(e == 0){
    console.log(e);
  }else if(e == 1){
  console.log("To Be Continued");
  return;
}else{
  return;
}
}
// if (e == 0) {
//   console.log("You look around the room and see a door and a small hole");
//   options = ["Try opening door", "Look in hole"];
//   index = readlineSync.keyInSelect(options, "Which choice?");
// }
// if (e == 1) {
//   console.log(
//     "You begin to cry and can't stop. The room starts filling with tears"
//   );
// }
//   index = readlineSync.keyInSelect(options, "Which choice?");
