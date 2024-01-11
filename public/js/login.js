const loginForm = async function(event) {
    event.preventDefault();
  
  const usernameEl = document.querySelector('#username').value.trim();
  const passwordEl = document.querySelector('#password').value.trim();
  
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        username: usernameEl.value,
        password: passwordEl.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to login, please try again!');
    }
  };
  
const signupForm = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

  document.querySelector('');
  document.addEventListener('submit', loginForm);

  document.querySelector('.signup-form')
  document.addEventListener('submit', signupForm);


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