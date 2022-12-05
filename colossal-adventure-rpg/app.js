const readline = require("readline-sync");

// Game intro section ===================================================

let playerName = "";
let currentHp =  100;
let inventory = ["MAGA Hat", "U.S. Constitution"];

let player = {
  name: playerName,
  hp: currentHp,
  inv: inventory,
};
player.hp = Math.floor(player.hp)
function greetPlayer() {
  const greeting1 = `"WELCOME TO ZORK!
    
    ZORK is a game of adventure, danger and low cunning. In it you will explore some of the most amazing territory ever seen by mortals.No computer should be without one!"`;
  console.log(greeting1);
  askPlayerName();
}
greetPlayer();

function askPlayerName() {
  playerName = readline.question(
    "I need a name, before we start. What's your name? ",
    (name) => {
      readline.close();
    }
  );

  playerName = playerName.charAt(0).toUpperCase() + playerName.slice(1);
  console.log(`Hi ${playerName} you currently have ${player.hp} Hit Points!`);
  player.name = playerName;
  //   console.log('\x1b[31mtest\x1b[0m this message');
}
// console.log(playerName, player.hp);

function playerStats() {
  let hp = player.hp;
  let name = player.name;
  let inv = player.inv;
  console.log(` Name: ${name}\n Hit Points: ${hp}\n Inventory: ${inv}`);
}
playerStats();
// Game intro end ========================================================

function walk() {
  let mykey = readline.question('Press "w" to begin walking or "p" for inventory ');
  if (mykey === "w") {
    journey();
  } else if (mykey === "p") {
    playerStats();
    walk();
  } else {
    console.log('A journey of 1000 miles begins with a "w"');
    walk();
  }
}
walk();

function algo1(randNum) {
  console.log("\x1b[33mA monster!!! What will you do???\x1b[0m");
  let choice = readline.question('Enter "f" to fight or "r" to flee ');

  let decision = Math.floor(Math.random() * 2);

  if (randNum === 1 && choice === "f") {
    monster1();
  } else if (randNum === 2 && choice === "f") {
    monster2();
  } else if (randNum === 3 && choice === "f") {
    monster3();
  } else if (decision === 1) {
    monster1();
  } else {
    console.log("You try to escape");
    choose("r");
  }
}

function monster1() {
  let monster = {
    name: "bunny",
    hp: 20,
    inv: ["rabbits foot", "jalepeno pepper"],
  };

  console.log(`You are attacked by a \x1B[31m${monster.name}\x1b[0m`);
  monsterAttack(monster);
}

function monster2() {
  let monster = {
    name: "gopher",
    hp: 30,
    inv: ["golf ball", "can of beer"],
  };

  console.log(`You are attacked by a \x1B[31m${monster.name}\x1b[0m`);
  monsterAttack(monster);
}

function monster3() {
  let monster = {
    name: "lemming",
    hp: 50,
    inv: ["bloody ice skate", "soldering iron"],
  };

  console.log(`You are attacked by a \x1B[31m${monster.name}\x1b[0m`);
  monsterAttack(monster);
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
  if (randNum === 1 || randNum === 2 || randNum === 3) {
    algo1(randNum);
  } else {
    walk();
  }
}

function monsterAttack(monster) {
  attack = Math.floor(Math.random() * 10);
  if (monster.name === "bunny") {
    console.log(`You take \x1b[31m${attack * 1}\x1b[0m damage`);
    player.hp = player.hp - attack * 1;
    player.hp = Math.floor(player.hp);
    console.log(`You have ${player.hp} Hit Points`);
    if (player.hp < 1) {
      death();
    }
    playerAttack(monster);
  } else if (monster.name === "gopher") {
    console.log(`You take \x1b[31m${attack * 2}\x1b[0m damage`);
    player.hp = player.hp - attack * 1.25;
    player.hp = Math.floor(player.hp);
    console.log(`You have ${player.hp} Hit Points`);
    if (player.hp < 1) {
      death();
    }
    playerAttack(monster);
  } else {
    console.log(`You take \x1b[31m${attack * 3}\x1b[0m damage`);
    player.hp = player.hp - attack * 1.3;
    player.hp = Math.floor(player.hp);
    console.log(`You have ${player.hp} Hit Points`);
    if (player.hp < 1) {
      death();
    }
    playerAttack(monster);
  }
}

function playerAttack(monster) {
  attack = Math.floor(Math.random() * 10);
  monster.hp = monster.hp - attack;
  if (monster.hp <= 0) {
    console.log(`You have slaughtered the ${monster.name}`);
    reward(monster);
    journey();
  }
  while (monster.hp > 0) {
    console.log(
      `${playerName} attacks the \x1b[31m${monster.name}\x1b[0m and does ${attack} damage`
    );
    console.log(`Monster has ${monster.hp}`);
    monsterAttack(monster);
  }
}

function choose(choice) {
  if (choice === "f") {
    fight();
  } else if (choice === "r") {
    flight();
  }
}

function fight() {
  let weapon = "Sword";
  //
  playerAttack(monster);
}

function flight() {
  console.log(
    `\x1b[33mThe site of the MONSTER-VAR makes you wet your pants and you run away.\x1b[0m]`
  );
  journey();
}

function reward(monster) {
  if (monster.name === "bunny") {
    player.inv.push(...monster.inv);
    console.log(`The ${monster.name} dropped ${monster.inv}`);
    console.log(`You have ${player.inv}`);
  } else if (monster.name === "gopher") {
    player.inv.push(...monster.inv);
    console.log(`The ${monster.name} dropped ${monster.inv}`);
    console.log(`You have ${player.inv}`);
  } else if (monster.name === "lemming") {
    player.inv.push(...monster.inv);
    console.log(`The ${monster.name} dropped ${monster.inv}`);
    console.log(`You have ${player.inv}`);
  }
}

function death() {
  console.log("You have died. Embrace the peace of death");

  restart();
}

function restart() {
  player.name = "";
  player.hp = 100;
  player.inv = "";
  greetPlayer();
}
