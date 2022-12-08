let travelForm = document["travel-form"];

const fname = travelForm["first-name"].value;
const lname = travelForm["last-name"].value;
const age = travelForm.age.value;

const gender = travelForm.gender.value;
const loc = travelForm.location.value;
let meals = [];
let meal =  document.querySelectorAll('input[name=meal]:checked')
console.log(meal);

for(i=0; i < meal.length; i++){
    meals.push(meal[i].value)
}

const subBtn = travelForm.submit;

subBtn.addEventListener('click', function(e){
    e.preventDefault()

    alert(
      `First Name ${fname}\n Last Name: ${lname}\n Age: ${age}\n Gender: ${gender}\n Location: ${loc}\n Meal: ${meals} `
    );
})
