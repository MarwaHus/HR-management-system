'use strict'
let allEmployees = JSON.parse(localStorage.getItem("Employees"));
let employeeDep = [];
let total = 0;
let avgSalary = 0;
let empNum = 0;
employeeDep.push(renderDep("Administration"));
employeeDep.push(renderDep("Marketing"));
employeeDep.push(renderDep("Development"));
employeeDep.push(renderDep("Finance"));
console.log(employeeDep);
let table = document.getElementById("table");
for (let i = 0; i < employeeDep.length; i++) {
    let trEle = document.createElement("tr");

    let tdEle1 = document.createElement("td");
    tdEle1.textContent = employeeDep[i].depName;
    trEle.appendChild(tdEle1);

    let tdEle2 = document.createElement("td");
    tdEle2.textContent = employeeDep[i].empNum;
    trEle.appendChild(tdEle2);

    let tdEle3 = document.createElement("td");
    tdEle3.textContent = employeeDep[i].totalSal;
    trEle.appendChild(tdEle3);

    let tdEl4 = document.createElement("td");
    tdEl4.textContent = employeeDep[i].avgSal;
    trEle.appendChild(tdEl4);

    table.appendChild(trEle);
}



for (let i = 0; i < employeeDep.length; i++) {
    total += employeeDep[i].totalSal;
    avgSalary += employeeDep[i].avgSal;
    empNum += employeeDep[i].empNum;
}
function renderDep(depName) {
    let empNum = 0;
    let totalSal = 0;
    for (let i = 0; i < allEmployees.length; i++) {
        if (allEmployees[i].department === depName) {
            empNum += 1;
            totalSal = totalSal + allEmployees[i].netSalary;
        }
    }
    return {
        depName,
        empNum,
        avgSal: Math.floor(totalSal / empNum),
        totalSal
    };
}


let tableEle = document.getElementById("table");
let tf = document.createElement("tfoot");

let tdF1 = document.createElement("td");
tdF1.textContent = "Total";
tf.appendChild(tdF1);

let tdF2 = document.createElement("td");
tdF2.textContent = empNum;
tf.appendChild(tdF2);

let tdF3 = document.createElement("td");
tdF3.textContent = total;
tf.appendChild(tdF3);

let tdF4 = document.createElement("td");
tdF4.textContent = avgSalary;
tf.appendChild(tdF4);


tableEle.appendChild(tf);



