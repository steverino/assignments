let header = document.querySelector("#header");
header.classList.add("header");

let h1 = document.createElement("h1");
h1.textContent = "Javascript Made This";
header.append(h1);

let headerP = document.createElement("p");
let headerSpan = document.createElement("span");
headerSpan.classList.add("name");
headerSpan.textContent = "Steve";
headerP.textContent = " wrote the javascript";
headerP.style.fontSize = "1.5rem";
header.append(headerP);
headerP.prepend(headerSpan);

//Bronze
let lineLeft = document.querySelectorAll(".left");
let lineRight = document.querySelectorAll(".right");
let clearBtn = document.querySelector("#clear-button");

for (let i = 0; i < lineLeft.length; i++) {
  lineLeft[0].textContent = "I have something ridiculous to talk about ";
  lineLeft[1].textContent = "Underwear Gnomes";
}
for (let i = 0; i < lineRight.length; i++) {
  lineRight[0].textContent = "You always do.";
  lineRight[1].textContent = "You're a moron";
}

clearBtn.addEventListener("click", () => {
  document.querySelector(".messages").textContent = "";
});

