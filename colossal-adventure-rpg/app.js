const readline = require("readline-sync");

let playerName = "";

function greetPlayer() {
  const greeting1 = `"WELCOME TO ZORK!
    
    ZORK is a game of adventure, danger and low cunning. In it you will explore some of the most amazing territory ever seen by mortals.No computer should be without one!"`;
  console.log(greeting1);
  askPlayerName();
}
greetPlayer();

function askPlayerName() {
  playerName = readline.question(
    "I need a name, before we start. What's your name? "
  );
  console.log(`Hi ${playerName} !`);
//   console.log('\x1b[31mtest\x1b[0m this message'); 
}

function walk() {
  let mykey = readline.question('Press "w" to begin walking ');
  if (mykey === "w") {
    // algo1();
    journey();
  } else {
    console.log('A journey of 1000 miles begins with a "w"');
    walk();
  }
}
walk();

function algo1() {
  let randNum = Math.floor(Math.random() * 10);
  if (randNum === 1) {
    // console.log("Monster1");
    monster1();
  } else if (randNum === 2) {
    // console.log("Monster2");
    monster2();
  } else if (randNum === 3) {
    // console.log("Monster3");
    monster3();
  } else {
    journey();
  }
}

function monster1() {
  let m1Hp = 20;
  console.log("You are attacked by a \x1B[31mbunny\x1b[0m");
  return monsterAttack("bunny");
}

function monster2() {
  let m2Hp = 30;
  console.log("You are attacked by a \x1B[31mgopher\x1b[0m");
  return monsterAttack("gopher");
}

function monster3() {
  let m3Hp = 50;
  console.log("You are attacked by a \x1B[31mlemming\x1b[0m");
  return monsterAttack("lemming");
}

function journey() {
  const paths = [
    "You are walking through a forest",
    "You are in a meadow",
    "You are walking next to a river",
  ];
  const randomPath = Math.floor(Math.random() * paths.length);
  console.log(paths[randomPath]);
  let randNum = Math.floor(Math.random() * 10);
  if (randNum === 3 || randNum === 6 || randNum === 9) {
    algo1();
  } else {
    walk();
  }
}

function monsterAttack(monster) {
  attack = Math.floor(Math.random() * 10);

  if (monster === "bunny") {
    console.log(`You take \x1b[31m${attack * 1}\x1b[0m damage`);
    playerAttack(monster);
  } else if (monster === "gopher") {
    console.log(`You take \x1b[31m${attack * 2}\x1b[0m damage`);
    playerAttack(monster);
  } else {
    console.log(`You take \x1b[31m${attack * 3}\x1b[0m damage`);
    playerAttack(monster);
  }
}

function playerAttack(monster) {
  attack = Math.floor(Math.random() * 10);
  console.log(`${playerName} attcks the \x1b[31m${monster}\x1b[0m and does ${attack} damage`);
}
