const {Schema, model} = require('mongoose')

const User = new Schema({
    userEmail: {type: String, unique: true, required: true},
    userPassword: {type: String, required: true},
})


module.exports = model('User', User)