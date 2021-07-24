let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let addButton = document.getElementById('addButton');

const database = firebase.database();
let count = 0;

addButton.addEventListener('click', (e) => {
    e.preventDefault();
    database.ref('/users/' + count).set({
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
    })
    count++;
})