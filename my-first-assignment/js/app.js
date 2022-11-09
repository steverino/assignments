let myBtn = document.querySelector('.btn');

// 1.
// function hello(){
//     alert('You clicked the button!!!')
// }
// myBtn.addEventListener('click', hello);

// 2.
// myBtn.addEventListener('click', function() {alert('You clicked the button!!!')});

// 3. arrow function
myBtn.addEventListener('click', () => {
    let info = 'You clicked the button!!!';
    document.querySelector('.result').innerHTML = info;
});

