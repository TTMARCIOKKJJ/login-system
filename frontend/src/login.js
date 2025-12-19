function loginUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password-input').value;
    fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    }).then(response => {
        if (response.ok) {
            alert('Login successful!');
        } else {
            alert('Login failed. Please check your credentials.');
        }}).catch(error => {
            console.error('Error during login:', error);
            alert('An error occurred. Please try again later.');
        });
}