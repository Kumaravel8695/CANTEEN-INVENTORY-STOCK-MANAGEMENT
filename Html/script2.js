// script.js
document.addEventListener('DOMContentLoaded', function() {
    const purchaseOrderForm = document.getElementById('purchase-order-form');
    const purchaseOrderList = document.getElementById('purchase-order-list');

    purchaseOrderForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get input values
        const itemName = document.getElementById('item-name').value;
        const quantity = document.getElementById('quantity').value;

        // Create a new list item for the purchase order
        const listItem = document.createElement('li');
        listItem.textContent = `Item: ${itemName}, Quantity: ${quantity}`;

        // Append the new list item to the purchase order list
        purchaseOrderList.appendChild(listItem);

        // Clear form fields
        document.getElementById('item-name').value = '';
        document.getElementById('quantity').value = '';
    });
});
