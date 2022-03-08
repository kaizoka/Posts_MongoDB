class PostGetSend {
    async createPost(body) {

    }

    async getPosts(out) {
        let counter = 0 
        const postsUrl = 'http://localhost:5000/userpost/posts'
        await fetch(postsUrl)
            .then(data => data.json())
            .then(posts => this.outPosts(posts, out, counter))
        return counter
    }

    async getOnePost() {

    }

    async outPosts(arrayposts, out, counter) {
        arrayposts.forEach(post => {
            const div = `
            <div class="body-post">
            <h2>
                <a href="http://localhost:5000/userpost/${post._id}">
                ${post.title}
                </a>    
            </h2>
            <div class="body-post-content">
                <p>
                    ${post.body}
                </p>
            </div>
            <div class="body-post-createUser">
                <h3>
                    ${post.user}
                </h3>
                <span>
                    ${post.data}
                </span>
            </div>
            </div>
            `
            counter++
            out.innerHTML = div
        })
    }
}

const postGetSend = new PostGetSend()