const database = firebase.database();

databaseRef = database.ref('/users/');

let pos = 1;
databaseRef.on('child_added', (snapshot) => {
    newRow = snapshot.val();
    var table = document.getElementById("infoTable");
    var row = table.insertRow(pos);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = newRow.firstName;
    cell2.innerHTML = newRow.lastName;
    cell3.innerHTML = newRow.email;
    pos++;
})