function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simple validation (replace this with more robust validation)
    if (username === 'test' && password === 'test') {
        // Redirect to the homepage 
        window.alert('Login successful! Redirecting to homepage...');
    } else {
        alert('Invalid credentials. Please try again.');
    }
    function validateLogin() {
        alert('Button clicked!'); // Add this line to test if the script is executing
    }
}