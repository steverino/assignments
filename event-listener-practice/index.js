// document.getElementById('square').addEventListener('mousedown', redColor);

let mySquare = document.querySelector("#square");
console.log(mySquare);

let clearSquare = document.querySelector('#clearSquare');

mySquare.addEventListener("mousedown", redColor);

mySquare.addEventListener("mouseup", () => {
  mySquare.style.backgroundColor = "yellow";
});

mySquare.addEventListener("dblclick", () => {
  mySquare.style.backgroundColor = "green";
});

clearSquare.addEventListener("mouseover", ()=>{document.body.style.backgroundColor = '';
    mySquare.style.backgroundColor = "";
})

document.addEventListener("wheel", ()=>{document.body.style.backgroundColor = "orange"})

function redColor() {
  mySquare.style.backgroundColor = "red";
}

document.addEventListener("keydown", function(event) {
    // console.log(event.key);
    if (event.key === "r") {
      mySquare.style.backgroundColor = 'red';
    }else if (event.key === "g") {
      mySquare.style.backgroundColor = 'green';
    }else if (event.key === "b") {
      mySquare.style.backgroundColor = 'blue';
    }else if (event.key === "y") {
      mySquare.style.backgroundColor = 'yellow';
    }else if (event.key === "o") {
      mySquare.style.backgroundColor = 'orange';
    }else{
        mySquare.style.backgroundColor = '#eee';
    }
});
