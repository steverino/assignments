let readlineSync = require("readline-sync");

let setName = (namePicked) => {
  namePicked = readlineSync.question("Mario or Luigi ? ");
  // console.log(namePicked);
  return namePicked;
};

class Player {
  constructor(name, totalCoins, status, hasStar) {
    this.name = name;
    this.totalCoins = totalCoins;
    this.status = status;
    this.hasStar = hasStar;
  }

  gotHit() {
    if(this.status === 'small'){
      this.status = 'dead'
    }else if(this.status === 'big'){
      this.status = 'small'
    }else if(this.status === 'Powered Up'){
      this.status = 'big'
    }
    // console.log('Got Hit!!!: ' + this.status);
    this.print()
  }

  gotPowerup() {
    if(this.status === 'small'){
      this.status = 'big'
    }else if(this.status === 'big'){
      this.status = 'Powered Up'
    }else if(this.status === 'Powered Up'){
      this.hasStar = true
    }
    // console.log("Powered Up: " + this.status);
    this.print()

  }

  addCoin() {
    console.log("Total Coins: " + this.totalCoins++);
  }

  print() {
    console.log(`Name: ${this.name}`);
    console.log(`Total Coins: ${this.totalCoins}`);
    console.log(`Status: ${this.status}`);
    console.log(`============================`);
  }
}

function getRandom(min, max) {
  while (setName.status != "dead") {
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    if (random == 0) {
      setName.gotHit();
    } else if (random == 1) {
      setName.gotPowerup();
    } else if (random == 2) {
      setName.addCoin();
    }
  }
}

const mario = new Player("Mario", 0, "small", false);
const luigi = new Player("Luigi", 0, "small", false);

setName = new Player(setName(), 0, "small", false);
console.log(setName);
getRandom(0, 2);

// class Player {
//   constructor(name, totalCoins, hasStar) {
//     this.name = name;
//     this.totalCoins = totalCoins;
//     this.status = 2;
//     this.hasStar = hasStar;

//     this.gotPowerup = function () {
//       console.log("Power Up");
//     };

//     this.addCoin = function () {
//       console.log(totalCoins++);
//     };

//     this.gotHit = function() {
//       if(this.gotHit){
//         this.status--
//         if(this.status === 0){
//           console.log('Dead');
//         }else if(this.status === 1){
//           console.log('Small');
//         }else if(this.status === 2){
//           console.log('Big');
//         }else if(this.status === 1){
//           console.log('Powered Up');
//         }
//     }
//     };
//   }
//   getRandom(min, max) {
//     let random = Math.floor(Math.random() * (max - min + 1)) + min;

//     if (random === 0) {
//       this.gotHit();
//     } else if (random === 1) {
//       this.gotPowerup();
//     } else if (random === 2) {
//       this.addCoin();
//     }
//   }
// }

// const mario = new Player("Mario", 0, false);
// const luigi = new Player("Luigi", 0, false);

// console.log(mario.getRandom(0, 2));

// function print() {
//   console.log(this.name);
//   console.log(this.status);
//   console.log(this.totalCoins);
// }

// function getRandom(min, max) {
//   random = Math.floor(Math.random() * (max - min + 1)) + min;

//   if (random === 0) {
//     gotHit();
//   } else if (random === 1) {
//     gotPowerup();
//   } else if (random === 2){
//     addCoin();
//   }
// }

// setName = function(namePicked){
//       namePicked = this.name
//       return namePicked;
//     }
// gotHit = function(){
//       console.log(Player.status);

//     }
// gotPowerup = function(){
//       console.log("Power Up");

//     }
// addCoin = function(){
//       console.log("Added Coin");

//     }
