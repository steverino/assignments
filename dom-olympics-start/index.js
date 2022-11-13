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

msgArray = messages.children;
for (i = 0; i < msgArray.length; i++) {
  console.log(msgArray.item(i));
}

let sendMsg = document.querySelector("#input").value; //A new value is loaded on click
let divMsg = document.createElement("div");
divMsg.classList.add("message", "left");
divMsg.textContent = sendMsg;
messages.append(divMsg);

sendBtn.addEventListener("click", leftSide);
// e.preventDefault(); // so the page doesn't reload and reset everything

function leftSide(e) {
  e.preventDefault();
  if (divMsg.classList.contains("left")) {
    console.log(divMsg.classList.contains("left"));
    divMsg.style.alignSelf = "flex-end";
    messages.append(divMsg);
    divMsg.classList.remove("left");
    divMsg.classList.add("right");
    console.log("1st " + divMsg.classList);
  } else if (divMsg.classList.contains("right")) {
    divMsg.style.alignSelf = "flex-start";
    messages.append(divMsg);
    divMsg.classList.remove("right");
    divMsg.classList.add("left");
    console.log("2nd " + divMsg.classList);
  }
}

// console.log(right[1].textContent);
