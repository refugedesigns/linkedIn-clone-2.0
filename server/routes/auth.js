const express = require("express")
const { body } = require("express-validator")
const User = require("../models/user")
const isAuth = require("../middleware/is-auth")

const { signup, login, getUser } = require("../controllers/auth")

const router = express.Router()

router.post("/signup",[
    body("name").trim().notEmpty(),
    body("email").isEmail().custom((value, {req}) => {
        return User.findOne({email: value}).then(userDoc => {
            if(userDoc) {
                return Promise.reject("Email address already exists!")
            }
        })
    }).normalizeEmail(),
    body("password").isStrongPassword().trim().notEmpty()
], signup)

router.post("/login", [
    body("email").trim().isEmail().normalizeEmail()
], login)

router.get("/user", isAuth, getUser)

module.exports = router