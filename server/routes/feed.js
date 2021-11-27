const express = require("express")
const { body } = require("express-validator")

const { createPost, fetchPosts } = require("../controllers/feed")
const isAuth = require("../middleware/is-auth")

const router = express.Router()

router.post("/create-posts", isAuth, [
    body("content").trim().notEmpty()
], createPost)

router.get("/posts", isAuth, fetchPosts)

module.exports = router