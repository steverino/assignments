const newLi = document.createElement("li", "div");
const subBtn = document.querySelector("#addItem");
const delBtn = document.querySelector(".delete-btn");
let editBtn;

document.querySelector("#tb-h5").style.display = "none";

document.querySelector(".input").setAttribute("required", ""); //??? not working ???

subBtn.addEventListener("click", addLi); //click the submit button and run the addLi function

function addLi(e) {
  e.preventDefault();
  const ul = document.getElementById("list"); // querySelector('#list")
  const li = document.createElement("li");
  editBtn = document.createElement("button"); // create button for list item
  const liDiv = document.createElement("input"); //create div inside list item

  liDiv.style.display = "block";
  liDiv.setAttribute("readonly", "true");

  liDiv.value = document.querySelector(".input").value; //add user inout to div
  liDiv.setAttribute("class", "item");
  console.log(liDiv.textContent);

  editBtn.setAttribute("class", "edit-btn");
  editBtn.textContent = "Edit item"; // name the button
  editBtn.addEventListener("click", toggleEdit);

  const delBtn = document.createElement("button"); // create button for list item
  delBtn.setAttribute("class", "delete-btn");
  delBtn.textContent = "X"; // name the button
  delBtn.addEventListener("click", removeItem);

  li.append(liDiv, editBtn, delBtn); // add div and buttons to the list block "append" allows multiple items to be added

  ul.appendChild(li); // adding the list and its parts to the UL
  //   console.log(ul);

  document.querySelector("h5").style.display = "block";
}

function removeItem() {
  this.parentElement.remove();
}

let state = true;

function editItem() {
  editBtn.previousElementSibling.removeAttribute("readonly");
  console.log(editBtn.previousElementSibling);
  editBtn.previousElementSibling.focus();
  editBtn.previousElementSibling.style.backgroundColor =
    "rgba(250, 160, 160, .4)";
  editBtn.textContent = "Save item";
  state = false;
}

function saveItem() {
  editBtn.previousElementSibling.setAttribute("readonly", "true");
  editBtn.previousElementSibling.style.backgroundColor = "";
  editBtn.textContent = "Edit item";
  state = true;
}

function toggleEdit() {
  state ? editItem() : saveItem();
}
