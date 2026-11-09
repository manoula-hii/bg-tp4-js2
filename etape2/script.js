function doInsertRowTable(num, nom, prenom, points) {

    let table = document.querySelector("table");

    let row = table.insertRow();

    let cell1 = row.insertCell();
    let cell2 = row.insertCell();
    let cell3 = row.insertCell();
    let cell4 = row.insertCell();
    let cell5 = row.insertCell();

    cell1.innerHTML = num;
    cell2.innerHTML = nom;
    cell3.innerHTML = prenom;
    cell4.innerHTML = points;

    cell5.innerHTML = '<input type="checkbox">';

}