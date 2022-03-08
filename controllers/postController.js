const Post = require('../models/Post')
const path = require('path')

class postController {
    async createPost(req, res) {
        try {
            const { title, body, user, data } = req.body
            const post = new Post({title, body, user, data})
            await post.save()
            return res.json({message: `Post created`})
        } catch (e) {
            console.log(`Error in create Post ${e}`)
        }
    }

    async getPosts(req, res) {
        try {
            const posts = await Post.find()
            return res.json(posts)
        } catch (e) {
            console.log(`Error in Post get ${e}`)
        }
    }

    async getOnePost(req, res) {
        try {
            const { id } = req.body
            const post = await Post.findOne(id)
            res.json(post)
            return res.sendFile(path.resolve(__dirname, '../client/public/post.html'))
        } catch (e) {
            console.log(`Error in  authController method getPost ${e}`)
            res.status(400).json({message: 'Error in authController method getOnePost'})
        }
    }
}

module.exports = new postController()