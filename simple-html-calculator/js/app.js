document.title = "Simple HTML Calculator";
const form = document.math;
let addBtn = document.querySelector("#btn-add");
const userInput = document.querySelectorAll('input')


function clearColor(){
for(i=0;i<userInput.length;i++){
  userInput[i].style.backgroundColor = ''
}
}

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let add1 = document.querySelector("#augend").value;
  let add2 = document.querySelector("#addend").value;
  if (add1 === "" || add2 === "") {
    form.augend.style.backgroundColor = "pink";
    form.addend.style.backgroundColor = "pink";
    setTimeout(clearColor, 3000);
    
    document.querySelector("#sum").textContent = "Both Fields required";
  } else {
    let answer = `The sum of ${add1} + ${add2} is: `;
    document.querySelector("#sum").textContent =
    answer + (parseInt(add1) + parseInt(add2));
    form.augend.value = "";
    form.addend.value = "";
  }
});

let subBtn = document.querySelector("#btn-sub");

subBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let sub1 = document.querySelector("#minuend").value;
  let sub2 = document.querySelector("#subtrahend").value;
  if (sub1 === "" || sub2 === "") {
    form.minuend.style.backgroundColor = "pink";
    form.subtrahend.style.backgroundColor = "pink";
    setTimeout(clearColor, 3000);
    
    document.querySelector("#sum").textContent = "Both Fields required";
  } else {
    let answer = `The difference of ${sub1} - ${sub2} is: `;
    document.querySelector("#difference").textContent =
    answer + (parseInt(sub1) - parseInt(sub2));
    form.minuend.value = "";
    form.subtrahend.value = "";
  }
});

let mulBtn = document.querySelector("#btn-mul");

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
