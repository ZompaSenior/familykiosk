// Make sure the data.js file is included in your HTML before this script
document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('container');
    const titleElement = document.querySelector('h1');
    
    // Check if familyData is defined
    if (typeof familyData === 'undefined') {
        // Show a message if data.js is not found
        container.innerHTML = '<p>Please copy the file <code>data-template.js</code>, rename it to <code>data.js</code> and customize it.</p>';
        return;
    }

    // Set the page title from the data
    titleElement.textContent = familyData.pageTitle;
	document.title = familyData.pageTitle; // Set the browser title

    familyData.members.forEach(item => {
        const square = document.createElement('div');
        square.className = 'square';
        square.innerHTML = `
            <a href="${item.url}">
                <img src="${item.picture}" alt="${item.title}">
                <h2>${item.title}</h2>
            </a>
        `;
        container.appendChild(square);
    });
});
