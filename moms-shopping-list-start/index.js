const newLi = document.createElement("li", "div");
const subBtn = document.querySelector("#addItem");
const delBtn = document.querySelector(".delete-btn");
let editBtn;

// document.querySelector("#tb-h5").style.display = "none";

document.querySelector(".input").setAttribute("required", ""); //??? not working ???

subBtn.addEventListener("click", addLi); //click the submit button and run the addLi function

function addLi(e) {
  e.preventDefault();
  const ul = document.getElementById("list"); // querySelector('#list")
  const li = document.createElement("li");
  editBtn = document.createElement("button"); // create button for list item
  const liDiv = document.createElement("input"); //create div inside list item
    liDiv.style.outline = 'none';
    liDiv.style.border = 'none';


  liDiv.style.display = "block";
  liDiv.setAttribute("readonly", "true");

  liDiv.value = document.querySelector(".input").value; //add user inout to div
  liDiv.setAttribute("class", "item");


  editBtn.setAttribute("class", "edit-btn");
  editBtn.textContent = "Edit item"; // name the button
  editBtn.addEventListener("click", toggleEdit);

  const delBtn = document.createElement("button"); // create button for list item
  delBtn.setAttribute("class", "delete-btn");
  delBtn.textContent = "X"; // name the button
  delBtn.addEventListener("click", removeItem);
  
  li.append(liDiv, editBtn, delBtn); // add div and buttons to the list block "append" allows multiple items to be added

  ul.appendChild(li); // adding the list and its parts to the UL
  

//   document.querySelector("h5").style.display = "block";
}

function removeItem() {
    console.log(this.parentElement);
    let deleteCheck = confirm("Delete Item???");
    if (deleteCheck) {
        this.parentElement.remove();
    }

}

let state = true;

function editItem(el) {
    // console.log(this.parentElement);
    el.previousElementSibling.removeAttribute("readonly");
    el.previousElementSibling.focus();
    el.previousElementSibling.style.border = 'thin solid #000'
    el.previousElementSibling.style.backgroundColor =
    "rgba(250, 160, 160, .4)";
    editBtn.textContent = "Save item";
    state = false;
}

function saveItem(el) {
    el.previousElementSibling.style.backgroundColor = "";
    el.previousElementSibling.setAttribute("readonly", "true");
    el.previousElementSibling.style.border = 'none'
    el.textContent = "Edit item";
    state = true;
}

function toggleEdit() {
    // console.log(this.parentElement);
  state ? editItem(this) : saveItem(this);
}
