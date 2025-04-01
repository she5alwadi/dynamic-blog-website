function getPosts() {
    const posts = localStorage.getItem('blogPosts');
    return posts ? JSON.parse(posts) : [];
}


function savePosts(posts) {
    localStorage.setItem('blogPosts', JSON.stringify(posts));
}


function displayPosts() {
    const postList = document.getElementById('post-list');
    const posts = getPosts();
    postList.innerHTML = '';

    if (posts.length === 0) {
        postList.innerHTML = '<p>No posts available.</p>';
        return;
    }

    posts.forEach((post, index) => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content.substring(0, 100)}...</p>
            <a href="post.html?id=${index}">Read More</a>
        `;
        postList.appendChild(postDiv);
    });
}