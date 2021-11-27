const pkg = require("cloudinary")
const {v2: cloudinary } = pkg
const User = require("../models/user")
const { validationResult } = require("express-validator")

exports.uploadPic = async(req, res, next) => {
    
    try {
        if(!req.file) {
            const error = new Error("No file provided, please provide a valid file!")
            error.statusCode = 422
            throw error
        }
        const user = await User.findById(req.userId)
        if(!user) {
            const error = new Error("No user found!")
            error.statusCode = 404
            throw error
        }
        const uploadedFile = await cloudinary.uploader.upload(req.file.path, {
            folder: 'linkedIn',
            resource_type: 'auto'
        })

        const { secure_url } = uploadedFile


        user.imageUrl = secure_url 

        const savedUser = await user.save()

        res.status(200).json({
            userId: savedUser._id.toString(),
            name: savedUser.name, 
            email: savedUser.email, 
            profession: savedUser.profession, 
            imageUrl: savedUser.imageUrl
        })
    }catch(error) {
        if(!error.statusCode) {
            error.statusCode = 500
            error.message = "File upload failed!"
            next(error)
        }
    }
}

exports.updateProfession = async(req, res, next) => {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            const error = new Error("Invalid data!")
            error.statusCode = 422
            error.message = errors.array()[0].msg
            throw error
        }
        const { headline } = req.body
        console.log(headline)
        const user = await User.findById(req.userId)
        if(!user) {
            const error = new Error("User does not exist!")
            error.statusCode = 422
            throw error
        }
        user.profession = headline

        const savedUser = await user.save()

        return res.status(200).json({
            userId: savedUser._id.toString(),
            name: savedUser.name, 
            email: savedUser.email, 
            profession: savedUser.profession, 
            imageUrl: savedUser.imageUrl
        })
    }catch(error) {
        if(!error.statusCode) {
            error.statusCode = 500
            error.message = "Server error!"
            next(error)
        }
    }
}