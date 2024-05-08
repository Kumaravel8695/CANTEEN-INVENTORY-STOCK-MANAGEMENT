// script4.js

// Sample list of available stocks in the canteen
const availableStocks = ["Bread", "Milk", "Eggs", "Butter", "Sugar", "Coffee", "Tea", "Rice", "Pasta"];

// Sample list of needed products for the canteen stocks
const neededProducts = ["Vegetables", "Fruits", "Cheese", "Yogurt", "Cereal", "Snacks"];

// Function to generate the inventory report
function generateInventoryReport() {
    const reportsDiv = document.getElementById("reports");
    reportsDiv.innerHTML = ""; // Clear previous content

    // Create headings
    const availableHeading = document.createElement("h2");
    availableHeading.textContent = "Available Stocks";
    reportsDiv.appendChild(availableHeading);

    const availableList = document.createElement("ul");
    reportsDiv.appendChild(availableList);

    // Loop through available stocks and display them
    availableStocks.forEach(stock => {
        const listItem = document.createElement("li");
        listItem.textContent = stock;
        availableList.appendChild(listItem);
    });

    // Create headings
    const neededHeading = document.createElement("h2");
    neededHeading.textContent = "Needed Products";
    reportsDiv.appendChild(neededHeading);

    const neededList = document.createElement("ul");
    reportsDiv.appendChild(neededList);

    // Loop through needed products and display them
    neededProducts.forEach(product => {
        const listItem = document.createElement("li");
        listItem.textContent = product;
        neededList.appendChild(listItem);
    });

    // Identify what stocks are available and what are not
    const stockAvailability = document.createElement("p");
    const availableStocksCount = availableStocks.length;
    const neededProductsCount = neededProducts.length;
    if (availableStocksCount === 0) {
        stockAvailability.textContent = "All stocks are unavailable.";
    } else if (neededProductsCount === 0) {
        stockAvailability.textContent = "All needed products are available.";
    } else {
        stockAvailability.textContent = `${availableStocksCount} stocks available out of ${availableStocksCount + neededProductsCount}.`;
    }
    reportsDiv.appendChild(stockAvailability);
}

// Call the function to generate the inventory report
generateInventoryReport();
