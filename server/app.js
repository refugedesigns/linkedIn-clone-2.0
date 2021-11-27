const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const connectDB = require("./helpers/db")
const feedRoutes = require("./routes/feed")
const authRoutes = require("./routes/auth")
const uploads = require("./routes/upload")
const pkg = require("cloudinary")
const {v2: cloudinary } = pkg


const app = express()

dotenv.config()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

app.use(cors())

app.use(express.json())

app.use("/feed", feedRoutes)
app.use("/auth", authRoutes)
app.use("/user", uploads)

app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
});

connectDB().then(res => {
   const server =  app.listen(process.env.PORT, () => {
        console.log("Server is running!")
    })
    const io = require("./helpers/socket").init(server)
    io.on("connection", socket => {
        console.log("Client connected")
    })
}).catch(err => console.log(err))
