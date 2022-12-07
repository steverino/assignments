document.title = "Simple HTML Calculator";


let add1 = document.querySelector("#augend").value;
let add2 = document.querySelector("#addend").value;
let addBtn = document.querySelector("#btn-add");

addBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let answer = `The sum of ${add1} + ${add2} is: ` 
  document.querySelector("#sum").textContent = answer + (parseInt(add1) + parseInt(add2));

});

let sub1 = document.querySelector("#minuend").value;
let sub2 = document.querySelector("#subtrahend").value;
let subBtn = document.querySelector("#btn-sub");

subBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let answer = `The difference of ${sub1} - ${sub2} is: `
  document.querySelector("#difference").textContent = answer + (parseInt(sub1) - parseInt(sub2));
});

let mul1 = document.querySelector("#multiplicand").value;
let mul2 = document.querySelector("#multiplier").value;
let mulBtn = document.querySelector("#btn-mul");

mulBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let answer = `The product of ${mul1} x ${mul2} is: `
  document.querySelector("#product").textContent = answer + (parseInt(mul1) * parseInt(mul2));
});
