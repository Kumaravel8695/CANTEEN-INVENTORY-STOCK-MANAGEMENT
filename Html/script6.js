// script.js
document.addEventListener('DOMContentLoaded', function() {
    const systemSettingsForm = document.getElementById('system-settings-form');

    systemSettingsForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get input values
        const unitsOfMeasurement = document.getElementById('units-of-measurement').value;
        const taxRate = document.getElementById('tax-rate').value;
        const currency = document.getElementById('currency').value;

        // Save settings (for demonstration purposes, we'll just log the values)
        console.log('Default Units of Measurement:', unitsOfMeasurement);
        console.log('Tax Rate (%):', taxRate);
        console.log('Currency:', currency);

        // Optionally, you can save the settings to the server/database here
    });
});
