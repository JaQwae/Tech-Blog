const logout = async () => {
    try {
        const response = await fetch('/api/user/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log out.');
        }
    } catch (err) {
        console.log("post err = " + err);
        res.status(400).json(err);
    }
};

document
    .querySelector('#logout')
    .addEventListener('click', logout);