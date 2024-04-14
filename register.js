// script.js
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('signup-username').value;
    var password = document.getElementById('signup-password').value;
    // Here you can add your signup logic, e.g., send data to server, validate inputs, etc.
    console.log('Signing up:', username, password);
  });
  
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;
    // Here you can add your login logic, e.g., send data to server, validate credentials, etc.
    console.log('Logging in:', username, password);
  });