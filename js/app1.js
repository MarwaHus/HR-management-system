'use strict'
const allInfo = [];
let secElement = document.getElementById("secTag"); console.log(secElement);
let form = document.getElementById("form");
console.log(form);

let tableEle = document.getElementById("empTable");

function EmployeeInfo(employeeId, fullName, department, level, imageURL) {

  this.employeeId = employeeId;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.imageURL = imageURL;
  this.salary;
  this.netSalary;
  allInfo.push(this);
}

EmployeeInfo.prototype.renderEmp = function () {
  //document.write(`<h3>Employee Name: ${this.fullName}, and the salary is = ${this.salary} and net Salary=${this.netSalary} </h3>`);
  let divEle = document.createElement("div");
  secElement.appendChild(divEle)
  let imgEle = document.createElement("img");
  imgEle.src = this.imageURL;
  divEle.appendChild(imgEle);

  let h3Ele = document.createElement("h3");
  h3Ele.textContent = `Name: ${this.fullName} `;
  divEle.appendChild(h3Ele);

  let h4Ele = document.createElement("h4");
  h4Ele.textContent = `ID: ${this.employeeId} `;
  divEle.appendChild(h4Ele);

  let depEle = document.createElement("h4");
  depEle.textContent = `Department: ${this.department}`;
  divEle.appendChild(depEle);

  let levEle = document.createElement("h4");
  levEle.textContent = `Level: ${this.level}`;
  divEle.appendChild(levEle);

  let salEle = document.createElement("h4");
  salEle.textContent = `salary: ${this.netSalary}JD`;
  divEle.appendChild(salEle);

 //
}


/*EmployeeInfo.prototype.randomNum=function(min,max){
    switch (this.level) {
        case "Senior":
          min = 1500;
          max = 2000;
          break;
        case "Mid-Senior":
          min = 1000;
          max = 1500;
          break;
        case "Junior":
          min = 500;
          max = 1000;
          break;
        default:
          return "Invalid level";
      }
      const randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
         // randomSalary = randomSalary - (randomSalary * 0.075);
          this.salary=randomSalary;
          this.netSalary=Math.floor(randomSalary - (randomSalary * 0.075));
       return randomSalary;
}*/


function getRandomNum(min, max) {
  let random = Math.random();
  random = (random * (max - min + 1)) + min;
  random = Math.floor(random);
  return random;
}
EmployeeInfo.prototype.empLevel = function () {
  if (this.level == "Junior") {
    this.salary = getRandomNum(500, 1000);
    this.netSalary = Math.floor(this.salary - (this.salary * 0.075));
  }
  else if (this.level == "Mid-Senior") {
    this.salary = getRandomNum(1000, 1500);
    this.netSalary = Math.floor(this.salary - (this.salary * 0.075));
  }
  else if (this.level == "Senior") {
    this.salary = getRandomNum(1500, 2000);
    this.netSalary = Math.floor(this.salary - (this.salary * 0.075));
  }
}





//function to create unique four digits employee id number
function generateEmployeeId() {
  const employeeId = Math.floor(Math.random() * 9000) + 1000;
  return employeeId;
}


let emp0 = new EmployeeInfo(1000, "Ghazi Samer", "Administration", "Senior", "./assets/Ghazi.png");
let emp1 = new EmployeeInfo(1001, "Lana Ali", "Finance       ", "Senior", "./assets/Lana.jpg");
let emp2 = new EmployeeInfo(1002, "Tamara Ayoub", "Marketing     ", "Senior", "./assets/Tamara.png");
let emp3 = new EmployeeInfo(1003, "Safi Walid	", "Administration", "Mid-Senior", "./assets/Safi.png");
let emp4 = new EmployeeInfo(1004, "Omar Zaid	", "Development   ", "Senior", "./assets/Omar.png");
let emp5 = new EmployeeInfo(1005, "Rana Saleh	", "Development   ", "Junior", "./assets/Rana.png");
let emp6 = new EmployeeInfo(1006, "Hadi Ahmad	", "Finance	     ", "Mid-Senior", "./assets/Hadi.jpg");

form.addEventListener("submit", submitHandler);
function submitHandler(event) {
  event.preventDefault();
  console.log("successfuly");

  let newId = generateEmployeeId();
  let empName = event.target.fname.value;
  let depName = event.target.department.value;
  let levelName = event.target.level.value;
  let imgName = event.target.img.value;
  let newEmp = new EmployeeInfo(newId, empName, depName, levelName, imgName);
  newEmp.empLevel();
  newEmp.renderEmp();
  employeeData(allInfo);
}


function employeeData(data) {
  let stringArr = JSON.stringify(data);
  localStorage.setItem('Employees', stringArr);
}

function getData() {
  let retrivedArr = localStorage.getItem('Employees');
  let objArr = JSON.parse(retrivedArr)
  console.log("data is coming from LS", objArr);
  if (objArr != null) {
    for (let i = 7; i < objArr.length; i++) {
      const emp = new EmployeeInfo(objArr[i].employeeId, objArr[i].fullName, objArr[i].department, objArr[i].level,
        objArr[i].imageURL);
    
    }
  }

  renderAll();
}
getData();


function renderAll() {
  for (let i = 0; i < allInfo.length; i++) {
    allInfo[i].empLevel();

    allInfo[i].renderEmp();

  }
}
console.log(localStorage.getItem(this.salary));