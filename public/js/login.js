const loginFormHandler = async (event) => {

    event.preventDefault();

    // Grabs data from form boxes
    const username = document.querySelector('#login-username').value.trim();
    const password = document.querySelector('#login-password').value.trim();

    if (username && password) {
        const response = await fetch('http://localhost:3001/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('http://localhost:3001/');
        } else {
            alert('Login failed');
        }
    }
}

const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#sign-up-username').value.trim();
    const email = document.querySelector('#sign-up-email').value.trim();
    const password = document.querySelector('#sign-up-password').value.trim();

    if (username && email && password) {
        const response = await fetch('http://localhost:3001/api/user/', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
console.log (response)
        if (response.ok) {
            document.location.replace('http://localhost:3001/');
        } else {
            alert('Failed to sign up.');
        }
    }
};

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

document
    .querySelector('.sign-up-form')
    .addEventListener('submit', loginFormHandler);