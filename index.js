const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const postRouter = require('./postRouter')
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use('/auth', authRouter)
app.use('/userpost', postRouter)

app.use('/', express.static(path.resolve(__dirname, './client')))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/public/index.html'))
})

app.get('/createpost', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/public/createPost.html'))
})

app.get('/registration', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/public/regist.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/public/login.html'))
})

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://qwerty:qwerty123@cluster0.dsigg.mongodb.net/auth_roles?retryWrites=true&w=majority`)
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()

