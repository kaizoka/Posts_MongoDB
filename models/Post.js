const { Schema, model } = require('mongoose')

const Post = new Schema({
    title: { type: String, required: true, minlenght: 10, maxlenght: 70 },
    body: { type: String, required: true, minlength: 50, maxlength: 500 },
    user: String,
    data: String
})

module.exports = model('Post', Post)