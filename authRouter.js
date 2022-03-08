const Router = require('express')
const router = new Router()
const controller = require('./authController')
const { check } = require('express-validator')
const authMiddleware = require('./middlewares/authMiddleware')
const roleMiddleware = require('./middlewares/roleMiddleware')

router.post('/registration', [
    check('username', 'Name user dosent').notEmpty(),
    check('password', 'Password user dosent').isLength({min: 4, max: 10})
], controller.registration)
router.post('/login', controller.login)
router.get('/users', roleMiddleware(['ADMIN']), controller.getUsers)
router.get('/:id', controller.getUser)

module.exports = router