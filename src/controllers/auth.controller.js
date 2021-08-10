import User from "../models/User";
import jwt from "jsonwebtoken";
import config from "../config"
import Role from "../models/Role";

export const register = async (req, res) => {
    const {username, email, password, roles} = req.body
  
    const user = new User({
        username,
        email,
        password: await User.encryptPassword(password)
    })

    if(roles){
        const foundRoles = await Role.find({name: { $in: roles }})
        user.roles = foundRoles.map(role => role._id)
    }else{
        const role = await Role.findOne({name: 'user'})
        user.roles = [role._id]
    }

    const savedUser = await user.save()

    const token = jwt.sign({id: savedUser._id}, config.SECRET, {
        expiresIn: 86400
    })

    const newuser = {
        '_id' : savedUser._id,
        'username' : savedUser.username,
        'email' : savedUser.email,
        'token' : token,
        'roles' : savedUser.roles
    }
    
    res.json(newuser)
}

export const login = async (req, res) => {

    const {email, password} = req.body

    const user = await User.findOne({email: email}).populate("roles")

    if(!user) return res.status(400).json({message: "User not found"})

    const matchPassword = await User.comparePassword(password, user.password)

    if(!matchPassword) return res.status(401).json({message : "Invalid password"})

    const token = jwt.sign({id: user._id}, config.SECRET, {
        expiresIn: 84600
    })

    res.json({token: token})
}