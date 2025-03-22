// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMollyFH_iyh-Tpg5ewzp6XLjJG7wirLw",
  authDomain: "form-fire-7de95.firebaseapp.com",
  projectId: "form-fire-7de95",
  storageBucket: "form-fire-7de95.firebasestorage.app",
  messagingSenderId: "521231638434",
  appId: "1:521231638434:web:b8b8083cf45df44acfdcfb"
};

// Initialize Firebase
const apps = initializeApp(firebaseConfig);
// Import Firebase modules (if using Firebase SDK 9 or above)
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get, child } from 'firebase/database';
const appSettings = {
    databaseURL: "https://form-fire-7de95-default-rtdb.firebaseio.com/",
};
// Initialize Firebase with your config
// const app = initializeApp(appSettings);
const database = getDatabase(apps);
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
