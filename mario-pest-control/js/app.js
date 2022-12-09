document.querySelector('h1').textContent  = "Mario Pest Control"
document.querySelector('.email').textContent  = "mario@mariopestcontrol.com"
document.querySelector('.phone').textContent  = "(123)555-1212"
document.querySelector('.address').textContent  = "123 Main Street"


let baddies = [
  {
    id: 0,
    baddieName: "Goombas",
    baddieImage: "Image",
    baddiePrice: 5,
  },
  {
    id: 1,
    baddieName: "Bob-ombs",
    baddieImage: "Image",
    baddiePrice: 7,
  },
  {
    id: 2,
    baddieName: "Cheep-cheeps",
    baddieImage: "Image",
    baddiePrice: 11,
  },
//   {
//     id: 3,
//     baddieName: "Goombas",
//     baddieImage: "Image",
//     baddiePrice: 5,
//   },
//   {
//     id: 4,
//     baddieName: "Bob-ombs",
//     baddieImage: "Image",
//     baddiePrice: 7,
//   },
//   {
//     id: 5,
//     baddieName: "Cheep-cheeps",
//     baddieImage: "Image",
//     baddiePrice: 11,
//   },
];

let card = document.querySelector(".card");

let indPrice = 0;

function showCard() {
  for (let i in baddies) {
    document.querySelector(".cards").innerHTML += `
    <!-- Card for individual Baddie -->
    <div class="card">
    <div class="bad-name"><h2> ${baddies[i].baddieName} </h2></div>
    <div class="bad-pic">${baddies[i].baddieImage}</div>
    <div class="bad-price">Bounty: ${baddies[i].baddiePrice} coins</div>
    <div class="bad-caught">
    Individual Pests Caught:<span id="pestTotal${[
      i,
    ]}">0</span> Ind Price Total: $ <span id="unitTotal${[i]}">0</span>
    </div>
    
    <input type="number" name="numCaught" id="numCaught${baddies[i].id}" />
    <button id="addPests${baddies[i].id}">Add Pests</button>
    </div>
    <!-- Card end-->    
    `;
    // console.log(baddies[i]);
}
}
function addPest() {}

showCard();

const addPest0 = document.querySelector("#addPests0");
let pestCount0 = 0;
addPest0.addEventListener("click", function (e) {
    e.preventDefault();
    let pestsCaught = document.querySelector(`#numCaught0`).value;
    if (pestsCaught == "") {
        pestsCaught = 0;
    }
    pestCount0 = pestCount0 += parseInt(pestsCaught);
    document.querySelector("#pestTotal0").textContent = pestCount0;
     
    totals()
    document.querySelector(`#numCaught0`).value = 0;
});

const addPest1 = document.querySelector("#addPests1");
let pestCount1 = 0;
addPest1.addEventListener("click", function (e) {
    e.preventDefault()
    let pestsCaught = document.querySelector(`#numCaught1`).value;
    if (pestsCaught == "") {
        pestsCaught = 0;
    }
    pestCount1 = pestCount1 + parseInt(pestsCaught);
    document.querySelector("#pestTotal1").textContent = pestCount1;
    totals()
    document.querySelector(`#numCaught1`).value = 0;
});

const addPest2 = document.querySelector("#addPests2");
let pestCount2 = 0;
addPest2.addEventListener("click", function (e) {
    e.preventDefault()
    let pestsCaught = document.querySelector(`#numCaught2`).value;
    if (pestsCaught == "") {
        pestsCaught = 0;
    }
    pestCount2 = pestCount2 + parseInt(pestsCaught);
    document.querySelector("#pestTotal2").textContent = pestCount2;
    totals()
    document.querySelector(`#numCaught2`).value = 0;
});

// Math section calculations etc...
function totals(){
    document.querySelector('#countTotal').textContent = pestCount0 + pestCount1 + pestCount2
    let price0 = parseInt(pestCount0) * baddies[0].baddiePrice
    let price1 = parseInt(pestCount1) * baddies[1].baddiePrice
    let price2 = parseInt(pestCount2) * baddies[2].baddiePrice
    document.querySelector('#priceTotal').textContent = price0 + price1 + price2
    
    document.querySelector('#unitTotal0').textContent = price0
    document.querySelector('#unitTotal1').textContent = price1
    document.querySelector('#unitTotal2').textContent = price2

}

function unitPrice(){

}
console.log(pestCount0 + pestCount1 + pestCount2);
