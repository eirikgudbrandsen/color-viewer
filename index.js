// Sample JSON data
const colors = [
    { "Red": "#FF0000" },
    { "Green": "#00FF00" },
    { "Blue": "#0000FF" }
];

function generateTable() {
    // Create table element
    const table = document.createElement('table');
    table.style.width = '100%';
    table.setAttribute('border', '1');

    // Iterate over JSON data
    colors.forEach(color => {
        // Create a row for each color
        const tr = document.createElement('tr');

        // Extract key (color name) and value (color hex)
        const key = Object.keys(color)[0];
        const value = color[key];

        // Create cells for key and value
        const tdKey = document.createElement('td');
        tdKey.textContent = key;
        const tdValue = document.createElement('td');
        tdValue.textContent = value;
        tdValue.style.backgroundColor = value; // Set background to the color

        // Append cells to row
        tr.appendChild(tdKey);
        tr.appendChild(tdValue);

        // Append row to table
        table.appendChild(tr);
    });

    // Append table to container
    const container = document.getElementById('table-container');
    container.appendChild(table);
}

// Call the function to generate the table
//generateTable();