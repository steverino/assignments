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
    if (this.status === "small") {
      this.status = "dead";
    } else if (this.status === "big") {
      this.status = "small";
    } else if (this.status === "Powered Up") {
      this.status = "big";
    }
    // console.log('Got Hit!!!: ' + this.status);
    this.print();
  }

  gotPowerup() {
    if (this.status === "small") {
      this.status = "big";
    } else if (this.status === "big") {
      this.status = "Powered Up";
    } else if (this.status === "Powered Up") {
      this.hasStar = true;
    }
    // console.log("Powered Up: " + this.status);
    this.print();
  }

  addCoin() {
    this.totalCoins++;
    this.print();
  }

  print() {
    console.log(`Name: ${this.name}`);
    console.log(`Total Coins: ${this.totalCoins}`);
    console.log(`Status: ${this.status}`);
    console.log(`============================`);
  }
}

function getRandom(min,max) {
  
  while (setName.status != "dead"){
    
    let random  = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
      
      if (random == 0) {
        setName.gotHit();
      } else if (random == 1) {
        setName.gotPowerup();
      } else if (random == 2) {
        setName.addCoin();
      }
    
  }
  
}


setName = new Player(setName(), 0, "small", false);
  getRandom(0,2)



// const mario = new Player("Mario", 0, "small", false);
// const luigi = new Player("Luigi", 0, "small", false);

