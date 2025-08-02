/* Function to read cookies, get their name-value pairs, and display the name-value
   pairs in the output area */
const displayCookieValues = function() {
    const outputDiv = document.getElementById("output");
    if (!outputDiv) return;
    
    const cookies = document.cookie.split(';');
    let outputHTML = "<h2>Stored Form Data:</h2><ul>";
    
    cookies.forEach(cookie => {
        const [name, value] = cookie.trim().split('=');
        if (name && value) {
            outputHTML += `<li><strong>${name}:</strong> ${decodeURIComponent(value)}</li>`;
        }
    });
    
    outputHTML += "</ul>";
    outputDiv.innerHTML = outputHTML;
}


// Event handler called when page has loaded
window.onload = () => {
    // Add code here to call function to display cookie values
    displayCookieValues();
}