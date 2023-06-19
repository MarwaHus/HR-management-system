'use strict'



const allInfo=[];
let secElement = document.getElementById("secTag");console.log(secElement);
let form =document.getElementById("form");
console.log(form);
function EmployeeInfo(employeeId,fullName,department,level,imageURL){

    this.employeeId=employeeId;
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.imageURL=imageURL;
    this.salary=0;
    this.netSalary;
    allInfo.push(this);
}

EmployeeInfo.prototype.renderEmp=function(){
//document.write(`<h3>Employee Name: ${this.fullName}, and the salary is = ${this.salary} and net Salary=${this.netSalary} </h3>`);

let imgEle=document.createElement("img");
imgEle.src=this.imageURL;
secElement.appendChild(imgEle);

let h3Ele=document.createElement("h3");
h3Ele.textContent=`Name: ${this.fullName} `;
secElement.appendChild(h3Ele);

let h4Ele=document.createElement("h4");
h4Ele.textContent=`ID: ${this.employeeId} `;
secElement.appendChild(h4Ele);

let depEle=document.createElement("h4");
depEle.textContent=`Department: ${this.department} `;
secElement.appendChild(depEle);

let levEle=document.createElement("h4");
levEle.textContent=`Level: ${this.level} `;
secElement.appendChild(levEle);
}

EmployeeInfo.prototype.randomNum=function(min,max){
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
      let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
         // randomSalary = randomSalary - (randomSalary * 0.075);
          this.salary=randomSalary;
          this.netSalary=Math.floor(randomSalary - (randomSalary * 0.075));
}

//function to create unique four digits employee id number
function generateEmployeeId() {
  const employeeId = Math.floor(Math.random() * 9000) + 1000;
  return employeeId;
}


//let emp0 = new EmployeeInfo(1000, "Ghazi Samer"   , "Administration", "Senior"    , "./assets/Ghazi.png");
//let emp1 = new EmployeeInfo(1001, "Lana Ali"      , "Finance       ", "Senior"    , "./assets/Lana.jpg");
//let emp2 = new EmployeeInfo(1002, "Tamara Ayoub"  , "Marketing     ", "Senior"    , "./assets/Tamara.png");
//let emp3 = new EmployeeInfo(1003, "Safi Walid	"   , "Administration", "Mid-Senior", "./assets/Safi.png");
//let emp4 = new EmployeeInfo(1004, "Omar Zaid	"   , "Development   ", "Senior"    , "./assets/Omar.png");
//let emp5 = new EmployeeInfo(1005, "Rana Saleh	"   , "Development   ", "Junior"    , "./assets/Rana.png");
//let emp6 = new EmployeeInfo(1006, "Hadi Ahmad	"   , "Finance	     ","Mid-Senior" , "./assets/Hadi.jpg");

form.addEventListener("submit",submitHandler);
function submitHandler(event){
event.preventDefault();
console.log("successfuly");

let newId  =generateEmployeeId();
let empName = event.target.fname.value;
let depName = event.target.department.value;
let levelName = event.target.level.value;
let imgName = event.target.img.value;


let newEmp= new EmployeeInfo(newId,empName,depName,levelName,imgName);
newEmp.renderEmp();
}

for (let i = 0; i < allInfo.length; i++) {
    allInfo[i].randomNum();
    allInfo[i].renderEmp(); 

}

 console.log(allInfo);