document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let valid = true;

    
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    
    if (!email) {
        document.getElementById('emailError').textContent = 'Email is required';
        valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format';
        valid = false;
    }

    if (!password) {
        document.getElementById('passwordError').textContent = 'Password is required';
        valid = false;
    } else if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
        valid = false;
    }

    if (valid) {
        
        const loginData = {
            username: email,
            password: password
        };

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('responseMessage').textContent = 'Login successful!';
            console.log(data);
        })
        .catch(error => {
            document.getElementById('responseMessage').textContent = 'Login failed. Try again.';
            console.error(error);
        });
    }
});


document.getElementById('togglePassword').addEventListener('change', function () {
    const passwordField = document.getElementById('password');
    passwordField.type = this.checked ? 'text' : 'password';
});
