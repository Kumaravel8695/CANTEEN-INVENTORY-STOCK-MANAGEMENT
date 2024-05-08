// script.js
document.addEventListener('DOMContentLoaded', function() {
    const alertsContainer = document.getElementById('alerts');

    // Example: Display a low inventory alert
    const lowInventoryAlert = document.createElement('div');
    lowInventoryAlert.classList.add('alert', 'alert-warning');
    lowInventoryAlert.textContent = 'Low inventory alert: Some items are running low in stock.';
    alertsContainer.appendChild(lowInventoryAlert);

    // Example: Display a pending orders notification
    const pendingOrdersNotification = document.createElement('div');
    pendingOrdersNotification.classList.add('alert', 'alert-info');
    pendingOrdersNotification.textContent = 'You have pending orders that need attention.';
    alertsContainer.appendChild(pendingOrdersNotification);
});
