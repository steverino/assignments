// let readlineSync = require("readline-sync");

class Player {
  constructor(name, totalCoins, status, hasStar) {
    this.name = name;
    this.totalCoins = totalCoins;
    this.status = status;
    this.hasStar = hasStar;
  }

  setName(namePicked) {
    namePicked = this.name;
    console.log(namePicked);
  }

  gotHit() {
    if (this.status === "small") {
      this.status = "dead";
    } else if (this.status === "big") {
      this.status = "small";
    } else if (this.status === "Powered Up") {
      this.status = "big";
    }
    return this.status;
  }

  gotPowerup() {
    if (this.status === "small") {
      this.status = "big";
    } else if (this.status === "big") {
      this.status = "Powered Up";
    } else if (this.status === "Powered Up") {
      this.hasStar = true;
    }
    return this.status;
  }

  addCoin() {
    this.totalCoins++;
    return this.totalCoins;
  }

  print() {
    if(this.status !== 'dead'){
    return `Name: ${this.name}\n 
    Total Coins: ${this.totalCoins}\n 
    Status: ${this.status}\n 
    Has Star: ${this.hasStar}\n
    ==================================`;
  }else{
    return `Game Over ${this.name}\n
    Total Coins Collected: ${this.totalCoins}`

  }
  }
}

// const mario = new Player('Mario', 0, 'small', false)
// const luigi = new Player('Luigi', 0, 'small', false)

nameArray = ["Mario", "Luigi"];
let randomNum = Math.floor(Math.random() * nameArray.length);

let player = new Player(nameArray[randomNum], 0, "small", false);

// function getRandom(max) {
//   return Math.floor(Math.random() * max);
// }
// 0=gothit 1=powerup 2=addcoin
let getRandom = function (max) {
  if (player.status === "dead") {

    clearInterval(intId);
  } else {
    // console.log(Math.floor(Math.random() * max));
    let number = Math.floor(Math.random() * max);
    if (number === 0) {
      player.gotHit();
    } else if (number === 1) {
      player.gotPowerup();
    } else {
      player.addCoin();
    }
    console.log(player.print());
  }
};

let intId = setInterval(getRandom, 1000, 3);
intId;