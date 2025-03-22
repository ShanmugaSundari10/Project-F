// Import Firebase modules (if using Firebase SDK 9 or above)
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get, child } from 'firebase/database';
const appSettings = {
    databaseURL: "https://form-fire-7de95-default-rtdb.firebaseio.com/",
};
// Initialize Firebase with your config
const app = initializeApp(appSettings);
const database = getDatabase(app);
const userListInDB = ref(database, "users");

const idEl = document.querySelector("#id");
const nameEl = document.querySelector("#name");
const ageEl = document.querySelector("#age");
const cityEl = document.querySelector("#city");
const frm = document.querySelector("#frm");
const tblBodyEl = document.querySelector("#tblBody");

// adding values in to realtime database
frm.addEventListener("submit", function(e){
    e.preventDefault();
    set(userListInDB,{
       name: nameEl.value.trim(),
       age: ageEl.value.trim(),
       city: cityEl.value.trim(),
    });
})
.then(() => {
    console.log("Data saved successfully!");
  })
  .catch((error) => {
    console.error("Error saving data: ", error);
  });
