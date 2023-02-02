const form = document.todoForm;

function getTodos() { // getTodos
  axios
    .get("https://api.vschool.io/sfalvo/todo")
    .then((response) => {
      
      for (let i = 0; i < response.data.length; i++) {
        let title = document.createElement("h2");
        title.className = "title";
        title.id = `title${response.data[i]._id}`
        let description = document.createElement("p");
        description.className = "description";
        const price = document.createElement("p");

        const editBtn = document.createElement("button");
        editBtn.classList.add("edit-btn");
        editBtn.id =`edit` 
        
        const deleteBtn = document.createElement("button");
        
        const completeBtn = document.createElement("button");
        completeBtn.id = `completeBtn${response.data[i]._id}`

        const updateBtn = document.createElement("button");
        updateBtn.classList.add("update-btn", "hide-btn");
        updateBtn.id = `updateBtn`
        console.log(updateBtn);

        editBtn.textContent = "Edit";
        deleteBtn.textContent = "Delete";
        completeBtn.textContent = "Complete";
        updateBtn.textContent = "Update";
        
        
        
        const completedBox = document.createElement("input");
        completedBox.type = "checkbox";
        completedBox.name = "name";
        completedBox.className = "complete-box";
        console.log(response.data[i].completed);
        completedBox.addEventListener("change", function () {
          console.log("Changed");
          
        });
        
        function complete(){
          console.log(response.data[i].completed);
          // let completed = response.data[i].completed
          if(response.data[i].completed.checked == false) {
            response.data[i].completed.checked = true; 
            title.style.textDecoration =
            "line-through";
            console.log(title);
          }
          else {
            if(response.data[i].completed.checked == true) {
              response.data[i].completed.checked = false;
              title.style.textDecoration =
            "none"; 
             }   
        }
        }

        title.textContent = response.data[i].title;
        description.textContent = response.data[i].description;
        price.textContent = response.data[i].price;

        document
          .querySelector(".todo-item")
          .append(
            title,
            description,
            price,
            editBtn,
            updateBtn,
            deleteBtn,
            completeBtn,
            completedBox
          );

        // document.querySelector('#todo-form').append()

        editBtn.addEventListener("click", function (e) {
          e.preventDefault();
          
          switchBtns(updateBtn,editBtn);

          form.title.value = response.data[i].title;
          form.price.value = response.data[i].price;
          form.description.value = response.data[i].description;
          form.image.value = response.data[i].image;
          console.log(response.data[i]._id);
        });

        updateBtn.addEventListener("click", function (e) {
          e.preventDefault();
          // switchBtns();
          updateItem(response.data[i]._id);
        });

        deleteBtn.addEventListener("click", function () {
          deleteItem(response.data[i]._id);
          
        });

      //   if(document.getElementsByClassName('complete-box').checked) {
      //     console.log("ckecked")
      // } else {
      //      console.log("not ckecked")
      // }
      }
    })
    .catch((error) => console.log(error));
}

getTodos();

//make todo function for listings

function updateItem(id) { // pass in element
  const updates = {
    title: form.title.value,
    price: form.price.value,
    description: form.description.value,
    image: form.image.value,
  };
  console.log(completed);
  axios
    .put(`https://api.vschool.io/sfalvo/todo/${id}`, updates)
    .then((response) => console.log(response.data))//element.remove
    .catch((error) => console.log(error));
}

const todoForm = document.todoForm;

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const newTodo = {
    title: todoForm.title.value,
    price: todoForm.price.value,
    description: todoForm.description.value,
    image: todoForm.image.value,
  };

  axios
    .post("https://api.vschool.io/sfalvo/todo/", newTodo)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
});

function deleteItem(id) {
  axios
    .delete(`https://api.vschool.io/sfalvo/todo/${id}`)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
}
let btnSubmit = document.querySelector("#submit");

// let updateBtn = document.querySelector('.update-btn')
// let editBtn = document.querySelector('.edit-btn')

function switchBtns(btn1,btn2) {
  btn1 = document.querySelector(`#updateBtn`)
  btn2 = document.querySelector(`#editbtn`)
  
  btn1.classList.toggle("hide-btn");
  btn2.classList.toggle("hide-btn");
}

function strikeThrough() {
   document.querySelector('.title').style.textDecoration = "line-through"
   document.querySelector('.description').style.textDecoration = "line-through"
}
