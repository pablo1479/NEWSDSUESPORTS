document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        
        // Send a POST request to your backend server with the username and password
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: username, password: password})
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Login failed');
            }
            return response.json();
        })
        .then(data => {
            // Assuming the server responds with a JWT upon successful login
            var token = data.token;
            
            // Store the token in localStorage or sessionStorage
            localStorage.setItem('token', token);
            
            // Redirect the user to a new page or perform any other action
            window.location.href = '/dashboard'; // Redirect to dashboard page
        })
        .catch(error => {
            // Handle login failure
            alert('Login failed. Please try again.');
        });
    });
});
