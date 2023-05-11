//FORMULARIO
const form = document.getElementById('login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  const error = document.getElementById('error-message');
  const success = document.getElementById('success-message');
  
  if (username === '') {
    error.innerHTML = 'Please enter a valid username';
    success.innerHTML = '';
  } else if (password === '') {
    error.innerHTML = 'Please enter a valid password';
    success.innerHTML = '';
  } else {
    error.innerHTML = '';
    success.innerHTML = 'Login successful!';
  }
});
