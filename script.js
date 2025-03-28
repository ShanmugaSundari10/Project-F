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
    if (!nameEl.value.trim() || !ageEl.value.trim() || !cityEl.value.trim()){
        alert("Please Enter a Value");
    }
    if(idEl.value){
      var data = `${j}#${nameEl.value}#${ageEl.value}#${cityEl.value}`;
      localStorage.setItem("data_" + j, data);
      nameEl.value="";
      ageEl.value="";
      cityEl.value="";
      idEl.value ="";
      return;
    }
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
            <td><button class="btn-edit" onclick ="edit(${j})"><ion-icon name="create"></ion-icon></button></td>
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


function edit(key){
    edit_item = key;
    const data = localStorage.getItem(key);
    console.log(data);
    const data_stored = JSON.parse(data);
    console.log(data_stored);
    idEl.value = key;
    nameEl.value = data_stored.name;
    ageEl.value = data_stored.age;
    cityEl.value = data_stored.city;
    
}