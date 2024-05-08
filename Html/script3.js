// script.js
document.addEventListener('DOMContentLoaded', function() {
    const salesOrderForm = document.getElementById('sales-order-form');
    const salesOrderList = document.getElementById('sales-order-list');

    salesOrderForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get input values
        const itemName = document.getElementById('item-name').value;
        const quantity = document.getElementById('quantity').value;

        // Create a new list item for the sales order
        const listItem = document.createElement('li');
        listItem.textContent = `Item: ${itemName}, Quantity: ${quantity}`;

        // Append the new list item to the sales order list
        salesOrderList.appendChild(listItem);

        // Clear form fields
        document.getElementById('item-name').value = '';
        document.getElementById('quantity').value = '';
    });
});
