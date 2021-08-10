import User from "../models/User";
import jwt from "jsonwebtoken";
import config from "../config"

export const register = async (req, res) => {
    const {username, email, password, roles} = req.body
  
    const user = new User({
        username,
        email,
        password: await User.encryptPassword(password)
    })

    const savedUser = await user.save()

    const token = jwt.sign({id: savedUser._id}, config.SECRET, {
        expiresIn: 86400
    })

    res.json(token)
}

export const login = async (req, res) => {
    res.json('login...')
}