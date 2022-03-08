const User = require('./models/User')
const Role = require('./models/Role')
const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const { secret } = require('./config')

const generateAcessToken = (id, roles) => {
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, secret, {expiresIn:'24h'})
}

class authController {
    async registration(req, res) {
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()) {
                return res.status(400).json({message: 'Errors in registration', errors})
            } 
            const {username, password} = req.body
            const candidate = await User.findOne({username})
            if(candidate) {
                return res.status(400).json({message: 'User with name true'})
            }
            const hashPassword = bcrypt.hashSync(password, 7);
            const userRole = await Role.findOne({value: 'USER'})
            const user = new User({username, password: hashPassword, roles: [userRole.value]})
            await user.save()
            return res.json({message: 'User created'})
        } catch (e){
            console.log(`Error in authController method registration ${e}`)
            res.status(400).json({message: 'Error in authController method registration'})
        }  
    }

    async login(req, res) {
        try {
            const { username, password } = req.body
            const user = await User.findOne({username})
            if(!username) {
                return res.status(400).json({message: `User ${username} dont find`})
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if(!validPassword) {
                return res.status(400).json({message: `Not right password`})
            }
            const token = generateAcessToken(user._id, user.roles)
            return res.json({token})
        } catch (e){
            console.log(`Error in authController method login ${e}`)
            res.status(400).json({message: 'Error in authController method login'})
        }    
    }

    async getUsers(req, res) {
        try {
            const users = await User.find()
            return res.json(users)
        } catch (e){
            console.log(`Error in authController method getUsers ${e}`)
            res.status(400).json({message: 'Error in authController method getUsers'})
        }        
    }

    async getUser(req, res) {
        try {
            const { id } = req.body
            const user = await User.findOne(id)
            return res.json(user)
        } catch (e) {
            console.log(`Error in  authController method getUser ${e}`)
            res.status(400).json({message: 'Error in authController method getUser'})
        }
    }
}

module.exports = new authController()