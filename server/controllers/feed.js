const { validationResult } = require("express-validator")

const Post = require("../models/post")
const User = require("../models/user")
const io = require("../helpers/socket")

exports.createPost = async(req, res, next) => {
    
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            const error = new Error("Invalid data!")
            error.statusCode = 422
            error.message = errors.array()[0].msg
            throw error
        }
        const { content } = req.body
        const post = new Post({
            content: content,
            creator: req.userId
        })

        const postData = await post.save()

        const user = await User.findById(req.userId)
        if(!user) {
            const error = new Error("User does not exist!")
            error.statusCode = 404
            throw error
        }

        user.posts.push(postData)

        await user.save()

        io.getIO().emit("posts", {
            posts: {
                ...postData._doc,
                creator: {
                    _id: req.userId,
                    name: user.name,
                    profession: user.profession,
                    imageUrl: user.imageUrl
                }
            }
        })

        res.status(201).json({
            message: "Post created successfully",
            post: postData
        })
    } catch(error) {
        if(!error.statusCode) {
            error.statusCode = 500
        }
        next(error)
    }
    

}

exports.fetchPosts = async(req, res, next) => {
    let posts
    try {

    posts = await Post.find().populate({path: "creator", select: "-password -posts -email"}).sort({createdAt : -1 })

    return res.status(200).json({posts})
    } catch(error) {
        if(!error.statusCode) {
            error.statusCode = 500
        }
        next(error)
    }
}