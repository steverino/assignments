document.title = "Simple HTML Calculator";
const form = document.math;
let addBtn = document.querySelector("#btn-add");
let subBtn = document.querySelector("#btn-sub");
let mulBtn = document.querySelector("#btn-mul");
const userInput = document.querySelectorAll("input");

function errorColor() {
  form.augend.style.backgroundColor = "pink";
  form.addend.style.backgroundColor = "pink";
}

function clearColor() {
  for (i = 0; i < userInput.length; i++) {
    userInput[i].style.backgroundColor = "";
  }
}

function addNums(num1, num2) {

  num1 = form.augend.value;
  num2 = form.addend.value;

  // num1 = form.num1.value;
  // num2 = form.num2.value;  
  let result = parseFloat(num1) + parseFloat(num2);

  if (num1 === "" || num2 === "") {
    errorColor();
    setTimeout(clearColor, 3000);
    
    document.querySelector("#sum").textContent = "Both Fields required";
  } else {
    
    document.querySelector("#sum").textContent = `The sum of ${num1} + ${num2} is: ${result} `;
    
    form.augend.value = "";
    form.addend.value = "";
  }
}
addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  addNums(0, 0);
});

function subNums(num1, num2) {
  num1 = form.minuend.value;
  num2 = form.subtrahend.value;
  // num1 = form.num1.value;
  // num2 = form.num2.value;
  let result = parseFloat(num1) - parseFloat(num2);

  if (num1 === "" || num2 === "") {
    errorColor();
    setTimeout(clearColor, 3000);

    document.querySelector("#difference").textContent = "Both Fields required";
  } else {
    console.log(result);
    document.querySelector("#difference").textContent = `The difference of ${num1} - ${num2} is: ${result} `;
    form.minuend.value = "";
    form.subtrahend.value = "";
  }
}

subBtn.addEventListener("click", function (e) {
  e.preventDefault();
  subNums(0, 0);
});



// console.log(addNums(1,2));

// addBtn.addEventListener("click", function (e) {
//   e.preventDefault();
//   let add1 = document.querySelector("#augend").value;
//   let add2 = document.querySelector("#addend").value;
//   if (add1 === "" || add2 === "") {
//     errorColor()
//     setTimeout(clearColor, 3000);

//     document.querySelector("#sum").textContent = "Both Fields required";
//   } else {
//     let answer = `The sum of ${add1} + ${add2} is: `;
//     document.querySelector("#sum").textContent =
//     answer + addNums(add1,add2);
//     form.augend.value = "";
//     form.addend.value = "";
//   }
// });

subBtn.addEventListener("click", function (e) {
  e.preventDefault();
  // let sub1 = document.querySelector("#minuend").value;
  // let sub2 = document.querySelector("#subtrahend").value;
  // if (sub1 === "" || sub2 === "") {
  //   form.minuend.style.backgroundColor = "pink";
  //   form.subtrahend.style.backgroundColor = "pink";
  //   setTimeout(clearColor, 3000);

  //   document.querySelector("#sum").textContent = "Both Fields required";
  // } else {
  //   let answer = `The difference of ${sub1} - ${sub2} is: `;
  //   document.querySelector("#difference").textContent =
  //     answer + (parseInt(sub1) - parseInt(sub2));
  //   form.minuend.value = "";
  //   form.subtrahend.value = "";
  // }
});


mulBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let mul1 = document.querySelector("#multiplicand").value;
  let mul2 = document.querySelector("#multiplier").value;
  if (mul1 === "" || mul2 === "") {
    form.multiplicand.style.backgroundColor = "pink";
    form.multiplier.style.backgroundColor = "pink";
    setTimeout(clearColor, 3000);
    document.querySelector("#sum").textContent = "Both Fields required";
  } else {
    let answer = `The product of ${mul1} x ${mul2} is: `;
    document.querySelector("#product").textContent =
      answer + parseInt(mul1) * parseInt(mul2);
    form.multiplicand.value = "";
    form.multiplier.value = "";
  }
});
