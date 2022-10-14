const User = require("../models/User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {secret} = require('../config')
const { AuthResponce } = require("../constants/ResponceText")


const getJwtToken = (userId) => {
    const payload = {
        userId
    }
    return (
        jwt.sign(payload, secret, { expiresIn: '24h' })
    )
}
class authController{
    async registration(req, res){
        try{
            const {userEmail, userPassword} = req.body
            const searchUser = await User.findOne({userEmail})
            if(searchUser) res.send('Пользователь существует')
            
            var hash = bcrypt.hashSync(userPassword, 7);
            const newUser = new User({userEmail: userEmail, userPassword: hash })
            await newUser.save()
            res.send('ок')

        }catch(e){
            console.log(e)
            res.send('registration error')
        }        
    }

    async login(req, res){
        try{
            const {userEmail, userPassword} = req.body
            const searchUser = await User.findOne({userEmail}) 
            if(!searchUser) res.send({text: AuthResponce.userNotExist})
            const validatePassword = bcrypt.compareSync(userPassword, searchUser.userPassword)
            if(!validatePassword) res.send({text: AuthResponce.passwordIncorrect})
            const token = getJwtToken(searchUser._id)
            res.json({token})

        }catch(e){
            console.log(e)
            res.send('login error')
        }            
    }

    async getUser(req, res){
        try{
            const users = await User.find() 
            res.json(users)
        }catch(e){
            console.log(e)
            res.send('getUser error')
        }            
    }

}

module.exports = new authController()