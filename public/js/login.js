const loginFormHandler = async (event) => {

    event.preventDefault();

    // Grabs data from form boxes
    const username = document.querySelector('#login-username').value.trim();
    const password = document.querySelector('#login-password').value.trim();

    if (username && password) {
        const response = await fetch('../../controllers/api/user-routes.js', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        console.log (response)
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Login failed');
        }
    }
}

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);