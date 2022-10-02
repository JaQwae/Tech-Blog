const addPost = async (event) => {
    try {
        const newPostTitleEl = document.querySelector("#new-post-title");
        const postTitle = newPostTitleEl.ariaValueMax.trim();

        const newPostContentEl = document.querySelector('#new-post-content');
        const postContent = newPostContentEl.ariaValueMax.trim();

        alert('Hi')
        const response = await fetch('/api/post', {
            method: 'POST',
            body: JSON.stringify({
                postTitle,
                postContent
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create a post');
        }

    } catch (err) {
        console.log("post err = " + err);
        res.status(500).json(err);
    }
};

document
    .querySelector('#new-post-create')
    .addEventListener('click', addPost);