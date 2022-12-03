const readline = require("readline-sync");

let playerName = '';

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
}

function walk(){
    
}
