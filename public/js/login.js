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