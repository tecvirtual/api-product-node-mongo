import Role from "../models/Role";
import User from "../models/User";

export const checkedRoleExisted = async (req, res, next) => {

    if(req.body.roles){
        console.log(req.body.roles)
        for (let index = 0; index < req.body.roles.length; index++) {
            const element = req.body.roles[index];
            console.log(element)
            const role = await Role.findOne({name: element})

            console.log(role);
            let message =  "Role " + element + " does not exists"
            if(!role) return res.status(401).json({message : message})

        }
    }

    next()
}

export const checkedUserOrEmailExisted = async (req, res, next) => {
    //let username = req.body.username
    const { username, email } = req.body
    const user = await User.findOne({username: username})

    if(!user) return res.status(401).json({message : 'Username already exists'})
}