document.addEventListener("DOMContentLoaded", function() {
    const screen = document.getElementById("screen");
    const buttons = document.querySelectorAll(".btn");
    const equalsButton = document.querySelector(".highlight-btn");
    const clearButton = document.getElementById("clear");
    const clearEntryButton = document.getElementById("clearEntry");
    const deleteButton = document.getElementById("delete");
    
    let expression = "";
    
    // Event listeners for number buttons
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            expression += button.textContent.trim();
            updateScreen();
        });
    });
    
    // Event listener for equals button
    equalsButton.addEventListener("click", function() {
        try {
            const result = eval(expression);
            expression = result.toString();
            updateScreen();
        } catch (error) {
            expression = "";
            screen.textContent = "Error";
        }
    });
    
    // Event listener for clear button
    clearButton.addEventListener("click", function() {
        expression = "";
        updateScreen();
    });
    
    // Event listener for clear entry button
    clearEntryButton.addEventListener("click", function() {
        expression = expression.slice(0, -1);
        updateScreen();
    });
    
    // Event listener for delete button
    deleteButton.addEventListener("click", function() {
        expression = expression.slice(0, -1);
        updateScreen();
    });
    
    // Function to update screen with current expression
    function updateScreen() {
        screen.textContent = expression || "0";
    }
});
