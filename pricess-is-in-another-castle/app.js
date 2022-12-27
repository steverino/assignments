class Player {
  status = ['Dead','Small', 'Big','Powered Up']
  constructor(name, totalCoins, hasStar) {
    this.name = name;
    this.totalCoins = totalCoins;
    this.status = this.status[1];
    this.hasStar = hasStar;

    this.gotHit = function () {
      
      if(this.gotHit){
        console.log(this.status);         
      }
      console.log(this.name +" Got hit");
    };
    this.gotPowerup = function () {
      console.log("Power Up");
    };
    this.addCoin = function () {
      console.log("Added Coin");
    };
  }
  getRandom(min, max) {
    let random = Math.floor(Math.random() * (max - min + 1)) + min;

    if (random === 0) {
      this.gotHit();
    } else if (random === 1) {
      this.gotPowerup();
    } else if (random === 2) {
      this.addCoin();
    }
  }
}

const mario = new Player("Mario", 0, false);
const luigi = new Player("Luigi", 0, false);

console.log(mario.getRandom(0, 2));

function print() {
  console.log(this.name);
  console.log(this.status);
  console.log(this.totalCoins);
}

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
