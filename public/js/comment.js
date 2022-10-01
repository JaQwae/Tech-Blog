const addComment = async () => {
    try {
        const response = await fetch('/api/comment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to post a comment.');
        }
    } catch (err) {
        console.log("post err = " + err);
        res.status(400).json(err);
    }
};

const newCommentHandler = async (event) => {
    event.preventDefault();

    const commentTextEl = document.querySelector("#comment-text");
    const content = commentTextEl.value.trim()
    const post_id = window.location.pathname.replace("/single/", "");

    if(!content){
        alert("You must fill in text for your comment!")
    } else{
        const response = await fetch('/api/comment',
        {
            method: "POST",
            body: JSON.stringify({content, post_id}),
            headers: {"Content-Type": "application/json"}
        })

        if(response.ok){
            location.reload()            
        }else{
            alert("Failed to create the comment!")
        }
    }
}

document
    .querySelector('#commentSubmit')
    .addEventListener('click', addComment);