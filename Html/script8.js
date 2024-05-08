// script.js
$(document).ready(function() {
    $('#login-form').submit(function(event) {
        event.preventDefault(); // Prevent form submission

        // Get input values
        const username = $('#username').val();
        const password = $('#password').val();

        // Perform authentication (for demonstration purposes, we'll just log the values)
        console.log('Username:', username);
        console.log('Password:', password);

        // Optionally, you can send the credentials to the server for authentication
        // If authentication is successful, redirect the user to the dashboard
        // If authentication fails, display an error message to the user
    });
});
