let myBtn = document.querySelector(".btn");

// 1.
// function hello(){
//     alert('You clicked the button!!!')
// }
// myBtn.addEventListener('click', hello);

// 2.
// myBtn.addEventListener('click', function() {alert('You clicked the button!!!')});

// 3. arrow function

let clicked = true;
let btnVal = document.querySelector(".btn");

myBtn.addEventListener("click", () => {
  if (clicked) {
    btnVal.innerHTML = "clear me"
    document.querySelector(".result").innerHTML = "clicked";
    clicked = false;
  } else {
    btnVal.innerHTML = "click me"
    document.querySelector(".result").innerHTML = "";
    clicked = true;
  }
});
