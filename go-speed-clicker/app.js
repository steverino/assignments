let page = document.querySelector('.container')
localStorage.clicks = 0 //starts local storage at 0

page.addEventListener('click', clickLog)// adds clickability to container element

let intervalID = setInterval(clickReset, 5000) // fires reset after 5 seconds

number = localStorage.clicks; // sets localstorage to number of clicks
document.querySelector('.number').textContent =  localStorage.clicks // places local storage key in number container
function clickLog(){
    document.querySelector('.number').textContent =  number; // takes number from above and places it in number container
    localStorage.setItem("clicks", number++) // adds one to the number variable
    
}

function clickReset(){
    
    document.querySelector('.totalClicks').textContent =  localStorage.clicks //puts the latest amount of clicks into storage
    number = 0 //resets the counter to 0
}