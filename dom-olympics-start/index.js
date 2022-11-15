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

//Silver

let theme = document.getElementById("theme-drop-down");

let left = document.querySelectorAll(".left");
let right = document.querySelectorAll(".right");

theme.addEventListener("change", () => {
  if (theme.value == "theme-one") {
    for (i = 0; i < left.length; i++) {
      left[i].style.backgroundColor = "burlywood";
    }
    for (i = 0; i < right.length; i++) {
      right[i].style.backgroundColor = "lightblue";
    }
  } else if (theme.value == "theme-two") {
    for (i = 0; i < left.length; i++) {
      left[i].style.backgroundColor = "#f08080";
    }
    for (i = 0; i < right.length; i++) {
      right[i].style.backgroundColor = "#778899";
    }
  }
});

//Gold
let send = document.querySelector("form"); //parent
sendBtn = send.querySelector("button");
// console.log(sendBtn);

// document.querySelector("#input").value = '';
let messages = document.querySelector(".messages");
console.log(messages);

let msgBox = document.createElement("div");
let divMsg = document.createElement("div");

// divMsg.textContent = document.getElementById("input").value;
// console.log(divMsg);
sendBtn.addEventListener("click", toggleLR);

let state = false;

function leftSide() {
  state = false;
  console.log("left");
  // divMsg.style.alignSelf = "flex-end";
  let divMsgLeft = document.createElement("div");
    
  divMsgLeft.textContent = document.getElementById("input").value;
  divMsgLeft.classList.remove("message", "right");
  divMsgLeft.classList.add("message", "left");

  messages.append(divMsgLeft);
  document.getElementById("input").value = "";
  state = true;
}

function rightSide() {
  state = true;
  console.log("right");
  // divMsg.style.alignSelf = "flex-start";
  let divMsgRight = document.createElement("div");
  
  divMsgRight.textContent = document.getElementById("input").value;
  divMsgRight.classList.remove("message", "left");
  divMsgRight.classList.add("message", "right");
  messages.append(divMsgRight);
  document.getElementById("input").value = "";
  state = false;
}

function toggleLR(e) {
  e.preventDefault();
  console.log(state);

  state ? rightSide() : leftSide();
  // messages.append(divMsg);
}
// console.log(right[1].textContent);
