let readlineSync = require("readline-sync");

class Player {
  constructor(name, totalCoins, status, hasStar) {
    this.name = name;
    this.totalCoins = totalCoins;
    this.status = status;
    this.hasStar = hasStar;
  }

  setName() {}

  gotHit() {}

  gotPowerup() {}

  addCoin() {}

  print() {}
}

// function getRandom(max) {
//   return Math.floor(Math.random() * max);
// }
function getRandom() {
  console.log(Math.floor(Math.random() * 3));
  return Math.floor(Math.random() * 3);
}

setInterval(getRandom, 1000);
