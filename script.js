function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simple validation (replace this with more robust validation)
    if (username === 'your_username' && password === 'your_password') {
        // Redirect to the homepage 
        window.location.href = 'homepage.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
}