const ul = document.querySelector('.todo-list')

const li = document.createElement('li')
li.className = 'list-item'

const editBtn = document.createElement('button')
editBtn.className = 'editItem'
editBtn.textContent = 'Edit'

const deleteBtn = document.createElement('button')
deleteBtn.className = 'deleteItem'

const updateBtn = document.createElement('button')
updateBtn.className = 'updateItem'

let makeTodo = function(){
  
  ul.append(li, editBtn, updateBtn, deleteBtn)
  console.log(ul);
}

makeTodo()

let getTodos = () => {
  // getTodos
  
  axios.get("https://api.vschool.io/sfalvo/todo").then((response) => {
    let data = response.data;
    let result = data.map(function (todoItem) {
      return `
      
      <h2>${todoItem.title}</h2>
      <p>${todoItem.description}</p>
      <p>${todoItem.price}</p>
      
      
      `;
      });
      document.querySelector(".todo-list").innerHTML = result.join("");
      
  });
};
getTodos();

// map
// does return a new array
// does not change size of original array
// uses values from original array when making new one

// const people = [
//   { name: 'bob', age: 20, position: 'developer' },
//   { name: 'peter', age: 25, position: 'designer' },
//   { name: 'susy', age: 30, position: 'the boss' },
//   { name: 'anna', age: 35, position: 'the boss' },
// ];

// const ages = people.map(function (person) {
  //   return person.age + 20;
  // });
  // const newPeople = people.map(function (person) {
    //   return {
      //     firstName: person.name.toUpperCase(),
      //     oldAge: person.age + 20,
      //   };
      // });
      
      // const names = people.map(function (person) {
        //   return `<h1>${person.name}</h1>`;
        // });
        
// document.body.innerHTML = names.join('');

// console.log(names);
