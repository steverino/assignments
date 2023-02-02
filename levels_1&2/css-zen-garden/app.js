var elements = document.querySelectorAll('.box')
var button = document.querySelector('.button')

button.addEventListener('click', removeBox)
function removeBox() {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.toggle('box')
  }
}