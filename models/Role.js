const { Schema, model } = require('mongoose') 

const Role = new Schema({ // создвем схему для роли пльзвотеля 
    value: {type: String, unique: true, default: 'USER'} 
})

module.exports = model('Role', Role) // добавляем схему в модель 