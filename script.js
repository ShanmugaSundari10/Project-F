const idEl = document.querySelector("#id");
const nameEl = document.querySelector("#name");
const ageEl = document.querySelector("#age");
const cityEl = document.querySelector("#city");
const frm = document.querySelector("#frm");
const tblBodyEl = document.querySelector("#tblBody");
var j = parseInt(localStorage.getItem("counter")) || 1;
// for onload funtion 
window.onload = displaydata();

frm.addEventListener("submit", function (e){  // submit form funciton to add table
    e.preventDefault();
count();
var data = `${j}#${nameEl.value}#${ageEl.value}#${cityEl.value}`;
localStorage.setItem("data_" + j, data);
localStorage.setItem("counter", j);  // Save counter to localStorage for persistence
displaydata();
});

function displaydata() {  // create table from submit form
    const tblBodyEl = document.querySelector("#tblBody");
    tblBodyEl.innerHTML = "";
    for (i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key && key.startsWith("data_")) {
            var value = localStorage.getItem(key);
            var dataparts = value.split("#");

            var row = document.createElement("tr");
            row.innerHTML = `
            <td>${dataparts[0]}</td>
            <td>${dataparts[1]}</td>
            <td>${dataparts[2]}</td>
            <td>${dataparts[3]}</td>
            <td><button class="btn-edit"><ion-icon name="create"></ion-icon></button></td>
            <td><button class="btn-delete"><ion-icon name="trash"></ion-icon></button></td>
            `;
            tblBodyEl.appendChild(row);
            nameEl.value="";
            ageEl.value="";
            cityEl.value="";
        }
    }
}

function count() {
    j++;
    return j;
}

const btn_edit = document.querySelector("#btn-edit");
const btn_delete = document.querySelector("#btn-delete");

btn_edit.addEventListener("Click", function(e){
  e.preventDefault();
  
})