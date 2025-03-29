document.addEventListener('DOMContentLoaded', () => {
    loadData();
});

// Function to load data from local storage
function loadData() {
    let storedData = JSON.parse(localStorage.getItem('userData')) || [];
    let tableBody = document.getElementById('data_table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear current table data

    storedData.forEach((data, index) => {
        let row = tableBody.insertRow();
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${data.name}</td>
            <td>${data.age}</td>
            <td>${data.city}</td>
            <td>
                <button onclick="editData(${index})"><ion-icon name="create"></ion-icon></button></td>
              <td><button onclick="deleteData(${index})"><ion-icon name="trash"></ion-icon></button></td>
            
        `;
    });
}

// Function to save data to local storage
function saveToLocalStorage(data) {
    let storedData = JSON.parse(localStorage.getItem('userData')) || [];
    storedData.push(data);
    localStorage.setItem('userData', JSON.stringify(storedData));
}


// Handle form submission
document.getElementById('frm').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const city = document.getElementById('city').value;

    const newData = { name, age, city };
    saveToLocalStorage(newData);

    // Clear form fields
    document.getElementById('frm').reset();

    // Reload data to update the table
    loadData();
});

// Edit data
function editData(index) {
    let storedData = JSON.parse(localStorage.getItem('userData')) || [];
    const dataToEdit = storedData[index];

    document.getElementById('name').value = dataToEdit.name;
    document.getElementById('age').value = dataToEdit.age;
    document.getElementById('city').value = dataToEdit.city;

    // Remove the data from local storage to be updated
    storedData.splice(index, 1);
    localStorage.setItem('userData', JSON.stringify(storedData));
}

// Delete data
function deleteData(index) {
    if(confirm("Are you sure to Delete?")){
    let storedData = JSON.parse(localStorage.getItem('userData')) || [];
    storedData.splice(index, 1);
    localStorage.setItem('userData', JSON.stringify(storedData));

    // Reload data to update the table
    loadData();
    }
}

