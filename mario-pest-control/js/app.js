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
];

let cardTemplate = `
<!-- Card for individual Baddie -->
<div class="card">
<div class="bad-name">${baddies[0].baddieName}</div>
<div class="bad-pic">${baddies[0].baddieImage}</div>
<div class="bad-price">${baddies[0].baddiePrice}</div>
<div class="bad-caught">
Individual Pests Caught: # Ind Price Total: $
</div>
<input type="number" name="numCaught" id="numCaught" />
<button id="addPests">Add Pests</button>
</div>
<!-- Card end-->
<!-- Card for individual Baddie -->
<div class="card">
<div class="bad-name">${baddies[1].baddieName}</div>
<div class="bad-pic">${baddies[1].baddieImage}</div>
<div class="bad-price">${baddies[1].baddiePrice}</div>
<div class="bad-caught">
Individual Pests Caught: # Ind Price Total: $
</div>
<input type="number" name="numCaught" id="numCaught" />
<button id="addPests">Add Pests</button>
</div>
<!-- Card end-->
<!-- Card for individual Baddie -->
<div class="card">
<div class="bad-name">${baddies[2].baddieName}</div>
<div class="bad-pic">${baddies[2].baddieImage}</div>
<div class="bad-price">${baddies[2].baddiePrice}</div>
<div class="bad-caught">
Individual Pests Caught: # Ind Price Total: $
</div>
<input type="number" name="numCaught" id="numCaught" />
<button id="addPests">Add Pests</button>
</div>
<!-- Card end-->
`;

let card = document.querySelector(".card");

for (let i = 0; i < baddies.length; i++) {
  document.querySelector(".cards").innerHTML = cardTemplate;
  console.log(i);
}

// Math section calculations etc...

let pestsCaught = document.querySelector("#numCaught").value;
