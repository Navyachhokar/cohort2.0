const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "Username already exists"],
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  bio: String,
  profileImage: {
    type: String,
    default:"https://ik.imagekit.io/uy2maxw35/profile_default_image.webp",
  },
});

const userModel = mongoose.model("users", userSchema)

module.exports = userModel