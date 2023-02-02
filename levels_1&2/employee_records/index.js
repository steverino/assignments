let employees = [];

function Employee(name, title, salary, empStatus = "Full Time") {
  this.name = name;
  this.title = title;
  this.salary = "$" + salary;
  this.empStatus = empStatus;
  function printEmployeeForm(){
   console.log(name, title, salary);
  }
  printEmployeeForm()
}

let John = new Employee("John", "Accountant", 30000);
let Bob = new Employee("Bob", "Sales", 40000, "part time");
let Tim = new Employee("Tim", "Waterboy", 120000, "contract");

for (let i = 0; i < 1; i++) {

  employees.push(John, Bob, Tim);
}

Employee.prototype.status = function () {
  console.log(this.empStatus);
};

console.log(employees);