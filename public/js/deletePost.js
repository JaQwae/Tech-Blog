async function deletePost(event) {
    event.preventDefault();
    try{
        const title = document.querySelector("#new-post-title").value.trim();
        const content = document.querySelector('#new-post-content').value.trim();
    } catch (err) {
        console.log("post err = " + err);
        res.status(500).json(err);
    }
};

document
    .querySelector('#post-delete')
    .addEventListener('click', deletePost)