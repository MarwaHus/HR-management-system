'use strict'



const allInfo=[];
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
document.write(`<h3>Employee Name: ${this.fullName}, and the salary is = ${this.salary} and net Salary=${this.netSalary} </h3>`);
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

let emp0 = new EmployeeInfo(1000, "Ghazi Samer"   , "Administration", "Senior"    , "https://");
let emp1 = new EmployeeInfo(1001, "Lana Ali"      , "Finance       ", "Senior"    , "https://");
let emp2 = new EmployeeInfo(1002, "Tamara Ayoub"  , "Marketing     ", "Senior"    , "https://");
let emp3 = new EmployeeInfo(1003, "Safi Walid	"   , "Administration", "Mid-Senior", "https://");
let emp4 = new EmployeeInfo(1004, "Omar Zaid	"   , "Development   ", "Senior"    , "https://");
let emp5 = new EmployeeInfo(1005, "Rana Saleh	"   , "Development   ", "Junior"    , "https://");
let emp6 = new EmployeeInfo(1006, "Hadi Ahmad	"   , "Finance	     ","Mid-Senior" , "https://");
for (let i = 0; i < allInfo.length; i++) {
    allInfo[i].randomNum();
    allInfo[i].renderEmp(); 

}

 console.log(allInfo);