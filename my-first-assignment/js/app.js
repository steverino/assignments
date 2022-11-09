const readline = require("readline-sync")
let myBtn = document.querySelector('.btn');

// 1.
// function hello(){
//     alert('You clicked the button!!!')
// }
// myBtn.addEventListener('click', hello);

// 2.
// myBtn.addEventListener('click', function() {alert('You clicked the button!!!')});

// 3. arrow function
myBtn.addEventListener('click', () => {alert('You clicked the button!!!')});

