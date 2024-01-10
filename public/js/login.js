const loginForm = async function(event) {
    event.preventDefault();
  
    const usernameEl = document.querySelector('');
    const passwordEl = document.querySelector('');
  
    const response = await fetch('', {
      method: 'POST',
      body: JSON.stringify({
        username: usernameEl.value,
        password: passwordEl.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('');
    } else {
      alert('Failed to login, please try again!');
    }
  };
  
  document.querySelector('');
  document.addEventListener('submit', loginForm);

  //Alternate login function validateLogin() {
//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;

//     // Simple validation (replace this with more robust validation)
//     if (username === 'test' && password === 'test') {
//         // Redirect to the homepage 
//         window.alert('Login successful! Redirecting to homepage...');
//     } else {
//         alert('Invalid credentials. Please try again.');
//     }
//     function validateLogin() {
//         alert('Button clicked!'); // Add this line to test if the script is executing
//     }
// }