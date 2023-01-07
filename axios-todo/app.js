const editBtn = document.createElement('button')
const deleteBtn = document.createElement('button')
const completeBtn = document.createElement('button')


editBtn.textContent = 'Edit'
deleteBtn.textContent = 'Delete'
completeBtn.textContent = 'Complete'

function getLists() {
  axios
  .get("https://api.vschool.io/sfalvo/todo")
  .then((response) => {
    for(let i =0; i < response.data.length; i++){
      const title = document.createElement('h2')
      const description = document.createElement('p')
      const price = document.createElement('p')

      title.textContent = response.data[i].title
      description.textContent = response.data[i].description
      price.textContent = response.data[i].price
      
      console.log( );

      document.querySelector('.todo-item').append(title, description,price,editBtn, deleteBtn, completeBtn)
      
      editBtn.addEventListener('click', function(){
        updateItem(response.data[i]._id)
      } )
        
      
      console.log(response.data);
    }
  })
  .catch((error) => console.log(error));    
}

getLists()

function updateItem(id){
  axios
  .get(`https://api.vschool.io/sfalvo/todo/${id}`)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => console.log(error));

}
