const User = require('../models/User')

const createUser = async(req, res) => {
    try{
        const {email, password} = req.body

        const user = new User({email, password})
        await user.save()
        res.status(201).json(user)
    }
    catch(e){
        console.log("Error Found", e)
        res.status(500).json({message: "Server Error"})
    }
}

const getUser = async(req, res) => {
    try{
        const user = await User.find()
        res.status(200).json(user)
    }
    catch(e){
        console.log("Error Found", e)
        res.status(500).json({message: "Server Error"})
    }
}

const updateUser = async(req, res) => {
    try{
        const {email, password} = req.body
        const user = await User.findByIdAndUpdate(req.params.id, {email, password})
        if(!user){
            return res.status(404).json({message: "Not Found"})
        }
        res.status(200).json(user)
    }
    catch(e){
        console.log("Error Found", e)
        res.status(500).json({message: "Server Error"})
    }
}

const deleteUser = async(req, res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user){
            return res.status(404).json({message: "user deleted"})
        }
        res.status(204).json()
    }
    catch(e){
        console.log("Error Found", e)
        res.status(500).json({message: "Server Error"})
    }
}

const singleUser = async (req, res) => {
    try{
        const user = await User.findById(req.params.id)
        if(!user){
            return res.status(404).json({message: "User Not Found"})
        }
        res.status(200).json(user)
    }
    catch(e){
        console.log("Error Found", e)
        res.status(500).json({message: "Server Error"})
    }
}

module.exports = {createUser, getUser, updateUser, deleteUser, singleUser}