let newLi = document.createElement("li", "div");
let subBtn = document.querySelector("#addItem");

document.querySelector(".input").setAttribute('required', '');//??? not working ???

function addLi(e) {
    e.preventDefault();
    const ul = document.getElementById("list");// querySelector('#list")
    const li = document.createElement("li");
    
    const liDiv = document.createElement("div"); //create div inside list item
    liDiv.textContent = document.querySelector(".input").value; //add user inout to div

  const editBtn = document.createElement("button"); // create button for list item
  editBtn.textContent = "Edit item"; // name the button

  const delBtn = document.createElement("button"); // create button for list item
  delBtn.textContent = "X"; // name the button

  li.append(liDiv, editBtn, delBtn); // add div and buttons to the list block "append" allows multiple items to be added

  ul.appendChild(li); // adding the list and its parts to the UL
  console.log(ul);
}

subBtn.addEventListener("click", addLi); //click the submit button and run the addLi function
