let logBtn = document.querySelector(".btn");
let logInput = document.querySelector("#userInput").value;

document.querySelector("title").textContent = "Log Input";

logBtn.addEventListener("click", addLogItem);

function addLogItem(e){
e.preventDefault();
    let list = document.querySelector('.list');
    // console.log(list);

    let newLi = document.createElement('li');
    newLi.textContent = logInput;
    console.log(logInput);
    document.querySelector('.list').append(newLi);
    
}  
