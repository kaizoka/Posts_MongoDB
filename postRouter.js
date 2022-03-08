const Router = require('express')
const router = new Router()
const controller = require('./controllers/postController')

router.post('/post', controller.createPost)
router.get('/posts', controller.getPosts)
router.get('/:id', controller.getOnePost)

module.exports = router