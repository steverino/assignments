const form = document.todoForm;

function getLists() {
  axios
    .get("https://api.vschool.io/sfalvo/todo")
    .then((response) => {
      for (let i = 0; i < response.data.length; i++) {
        let title = document.createElement("h2");
        title.className = "title";
        let description = document.createElement("p");
        description.className = "description";
        const price = document.createElement("p");

        const editBtn = document.createElement("button");
        editBtn.classList.add("edit-btn");
        const deleteBtn = document.createElement("button");
        const completeBtn = document.createElement("button");
        const updateBtn = document.createElement("button");
        updateBtn.classList.add("update-btn", "hide-btn");

        editBtn.textContent = "Edit";
        deleteBtn.textContent = "Delete";
        completeBtn.textContent = "Complete";
        updateBtn.textContent = "Update";
        
        completeBtn.addEventListener("click", function () {
          document.querySelector(".title").style.textDecoration =
            "line-through";
          document.querySelector(".description").style.textDecoration =
            "line-through";
        });

        const completedBox = document.createElement("input");
        completedBox.type = "checkbox";
        completedBox.name = "name";
        completedBox.value = "value";
        completedBox.id = "id";

        title.textContent = response.data[i].title;
        description.textContent = response.data[i].description;
        price.textContent = response.data[i].price;

        // console.log(response.data);

        document
          .querySelector(".todo-item")
          .append(
            title,
            description,
            price,
            editBtn,
            deleteBtn,
            completeBtn,
            updateBtn
          );

        // document.querySelector('#todo-form').append()

        editBtn.addEventListener("click", function (e) {
          e.preventDefault();
          console.log("Edit Fired");
          switchBtns();

          form.title.value = response.data[i].title;
          form.price.value = response.data[i].price;
          form.description.value = response.data[i].description;
          form.image.value = response.data[i].image;
          console.log(response.data[i]._id);
        });

        updateBtn.addEventListener("click", function (e) {
          e.preventDefault();
          switchBtns();
          updateItem(response.data[i]._id);
        });

        deleteBtn.addEventListener("click", function () {
          deleteItem(response.data[i]._id);
          console.log(response.data[i]._id);
        });
      }
    })
    .catch((error) => console.log(error));
}

getLists();

function updateItem(id) {
  const updates = {
    title: form.title.value,
    price: form.price.value,
    description: form.description.value,
    image: form.image.value,
  };
  // console.log(id);
  axios
    .put(`https://api.vschool.io/sfalvo/todo/${id}`, updates)
    .then((response) => console.log(response.data))
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

function switchBtns() {
  updateBtn.classList.toggle("hide-btn");
  editBtn.classList.toggle("hide-btn");
}

function strikeThrough() {
  // document.querySelector('.title').style.textDecoration = "line-through"
  // document.querySelector('.description').style.textDecoration = "line-through"
}
