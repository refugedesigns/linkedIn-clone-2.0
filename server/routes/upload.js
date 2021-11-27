const express = require("express")
const { body } = require("express-validator")
const multer = require("multer")

const { uploadPic, updateProfession } = require("../controllers/upload")
const isAuth = require("../middleware/is-auth")

const router = express.Router()

const storage = multer.diskStorage({})

const upload = multer({
    storage
})

router.post("/upload", isAuth, upload.single("profilePic"), uploadPic)

router.put("/profession", isAuth, [
    body("headline").notEmpty()
], updateProfession)

module.exports = router