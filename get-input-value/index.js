let logBtn = document.querySelector(".btn");
let logInput = document.querySelector("#userInput").value;

document.querySelector("title").textContent = "Log Input";

logBtn.addEventListener("click", addLogItem);

function addLogItem(){

    document.querySelector('.log').textContent = logInput;
    // console.log(logInput);
        
    

}
