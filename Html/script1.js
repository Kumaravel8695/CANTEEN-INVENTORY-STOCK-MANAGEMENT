// script.js
$(document).ready(function() {
    // Handle form submission
    $('#add-supplier-form').submit(function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Get input values
        var supplierName = $('#supplier-name').val();
        var contactEmail = $('#contact-email').val();
        
        // Add new supplier to the list
        $('#supplier-list').append('<li class="list-group-item">' + supplierName + ' - ' + contactEmail + '</li>');
        
        // Clear form fields
        $('#supplier-name').val('');
        $('#contact-email').val('');
    });
});
