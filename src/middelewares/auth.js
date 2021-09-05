import config from "../config"
import User from "../models/User"
import jwt from "jsonwebtoken"
import Role from "../models/Role"

export const verifyToken = async(req, res, next) => {
   try {
    const token = req.headers["x-access-token"]

    if(!token) return res.status(403).json({message: "No token provided"})

    const decoded = jwt.verify(token, config.SECRET)

    req.user_id = decoded.id

    const user = await User.findById(decoded.id)

    if(!user) return res.status(404).json({message : "user no found"})

    next()

   } catch (error) {
       return res.status(401).json({message: "Unauthorized Login"})
   }
}

export const isModerator = async(req, res, next) => {
    try {
        const user = await User.findById(req.user_id)
        
        const roles = await Role.find({_id: {$in : user.roles }})    
        
        /*roles.forEach(element => {
            console.log(element.name)
            if(element.name === "moderator"){
                console.log("yes is moderator")
                next()
                //return;
            }
        });*/
        //console.log(roles)
        for (let i = 0; i <= roles.length; i++) {    
            if(roles[i].name === "moderator"){
                next()
                return;
            }
        }
        
        return res.status(403).json({ message: "Required Moderador role"})
    } catch (error) {
        return res.status(401).json({message: "Unauthorized"})
    }
}

export const isAdmin = async(req, res, next) => {
    try {
        const user = await User.findById(req.user_id)
        
        const roles = await Role.find({_id: {$in : user.roles }})    
        
        for (let i = 0; i <= roles.length; i++) {    
            if(roles[i].name === "admin"){
                next()
                return;
            }
        }
        
        return res.status(403).json({ message: "Required Admin role"})
    } catch (error) {
        return res.status(401).json({message: "Unauthorized"})
    }
}