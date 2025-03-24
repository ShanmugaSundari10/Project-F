import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getDatabase,ref,push,onValue,remove,set } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-database.js";
const appSettings = {
    databaseURL: "https://form-fire-7de95-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const userListInDB = ref(database, "users");

const idEl = document.querySelector("#id");
const nameEl = document.querySelector("#name");
const ageEl = document.querySelector("#age");
const cityEl = document.querySelector("#city");
const frm = document.querySelector("#frm")
const btnSubmitEl = document.querySelector("#btnSubmit");
const tblBodyEl = document.querySelector("#tblBody");

frm.addEventListener("submit", function (e){
    e.preventDefault();

    if (idEl.value){
        return;
    }
    if(!nameEl.value.trim() || !ageEl.value.trim() || !cityEl.value.trim())
    {
        alert("please fill all details");
        return;
    }
    const newUser = {
        name: nameEl.value.trim(),
        age: ageEl.value.trim(),
        city: cityEl.value.trim(),
    };
    push(userListInDB, newUser);
});
