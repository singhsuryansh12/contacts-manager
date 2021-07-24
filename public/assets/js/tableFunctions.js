import { database, addButton } from "./functions";

databaseRef = database.ref('/users/');
var table = document.getElementById("dataTable");

databaseRef.on('child_added', (snapshot) => {
    newRow = snapshot.val();
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = newRow.firstName;
    cell2.innerHTML = newRow.lastName;
    cell3.innerHTML = newRow.email;
})