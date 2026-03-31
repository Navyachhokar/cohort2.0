const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

/* require routes */
const authRouter = require("./routes/auth.routes")
const postRouter = require("./routes/post.routes")
const userRouter = require("./routes/user.routes")

/* using routes */
app.use("/api/auth",authRouter)
app.use("/api/post",postRouter)
app.use("/api/user",userRouter)


module.exports = app