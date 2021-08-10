import User from "../models/User";

export const register = async (req, res) => {
    const {username, email, password, roles} = req.body
  
    const user = new User({
        username,
        email,
        password: await User.encryptPassword(password)
    })

    await user.save()

    res.json(user)
}

export const login = async (req, res) => {
    res.json('login...')
}