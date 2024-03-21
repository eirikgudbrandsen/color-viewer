function generateTable(data) {
    const colors = data.colors; // Access the 'colors' object from the fetched data
    const table = document.createElement('table');
    table.style.width = '100%';
    table.setAttribute('border', '1');

    Object.entries(colors).forEach(([key, value]) => {
        const tr = document.createElement('tr');

        const tdName = document.createElement('td');
        tdName.textContent = key;

        const tdHex = document.createElement('td');
        tdHex.textContent = value;

        const tdColor = document.createElement('td');
        tdColor.style.backgroundColor = value;
        tdColor.style.width = '250px'; 
        tdColor.style.height = '30px';

        tr.appendChild(tdName);
        tr.appendChild(tdHex);
        tr.appendChild(tdColor);

        table.appendChild(tr);
    });

    const container = document.getElementById('table-container');
    container.innerHTML = '';
    container.appendChild(table);

    //reset scroll-container on select
    const scrollableContainer = document.getElementById('scrollable-container');
    scrollableContainer.scrollTop = 0;
//    scrollableContainer.style.height = `${table.offsetHeight}px`;
}