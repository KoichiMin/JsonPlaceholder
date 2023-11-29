"use strict"

window.onload = () =>{
    const message = document.getElementById("message");

    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(data => {
            const table = document.createElement("table");
            

            // Create the table header
            const headerRow = table.insertRow(0);
            const headers = ["ID", "Name", "Username", "Email", "Phone", "Website"];

            headers.forEach(headerText => {
                const header = document.createElement("th");
                header.textContent = headerText;
                headerRow.appendChild(header);
            });

            // Display only the first 6 users
            for (let i = 0; i < 6 && i < data.length; i++) {
                const user = data[i];
                const row = table.insertRow();
                const fields = [user.id, user.name, user.username, user.email, user.phone, user.website];

                fields.forEach(field => {
                    const cell = row.insertCell();
                    cell.textContent = field;
                });
            }

            message.appendChild(table);
        })
    }
