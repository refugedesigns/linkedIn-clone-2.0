const { validationResult } = require("express-validator")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/user")

exports.signup = async(req, res, next) => {

    try {
        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            const error = new Error("Validation failed")
            error.statusCode = 422
            error.data = errors.array()[0].msg 
            throw error
        }
        const { name, email, password } = req.body

        const hashedPwd = await bcrypt.hash(password, 12)

        const user = new User({
            name,
            email,
            password: hashedPwd,
            profession: "",
            imageUrl: "",
            posts: []
        })
        const savedUser = await user.save()

        return res.status(201).json({
            message: "Signed up sucessfully",
            userId: savedUser._id.toString(),
            email: savedUser.email
        })
    }catch(error) {
        if(!error.statusCode) {
            error.statusCode = 500
        }
        next(error)
    }
    
}

exports.login = async(req, res, next) => {
    try{
        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            const error = new Error("Signin failed!")
            error.statusCode = 401
            error.data = errors.array()[0].msg
            throw error
        }

        const { email, password } = req.body

        const user = await User.findOne({email: email})
        if(!user) {
            const error = new Error("A user with this email was not found!")
            error.statusCode = 422
            throw error
        }

        const isEqual = await bcrypt.compare(password, user.password)
        if(!isEqual) {
            const error = new Error("Wrong password!")
            error.statusCode = 401
            throw error
        }
        const token = jwt.sign({
            email: user.email,
            userId: user._id.toString()
        }, 
        
        "thisisthescretekeyandshouldbeaverylonglongstring",
        { expiresIn: "1h"}
        )
        return res.status(200).json({token: token, userId: user._id.toString()})
    } catch(error) {
        if(!error.statusCode) {
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getUser = async(req, res, next) => {
    try {

        const user = await User.findById(req.userId) 
        if(!user) {
            const error = new Error("No user found!")
            error.statusCode = 404 
            throw error
        }

        return res.status(200).json({userId: user._id.toString(), name: user.name, email: user.email, profession: user.profession, imageUrl: user.imageUrl})
    }catch(error) {
        if(!error.statusCode) {
            error.statusCode = 500
        }
        next(error)
    }
}