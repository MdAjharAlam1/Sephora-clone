import {userModel} from "../models/user.models.js";

export const createUserAccount = async({fullname,email,phone,password}) =>{
    try {
        // console.log(fullname,email,phone,hashedPassword)
        if(!fullname || !email || !phone || !password){
            throw new Error(
                'All fields are required'
            )
        }
        
        const user = await userModel.create({
            email,
            phone,
            fullname,
            password
        })
        return user
        
    } catch (error) {
        console.log(error)
    }
}