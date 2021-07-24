let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let addButton = document.getElementById('addButton');

const database = firebase.database();

addButton.addEventListener('click', (e) => {
    e.preventDefault();
    database.ref('/users/').push().set({
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
    })
    firstName.value = "";
    lastName.value = "";
    email.value = "";
})