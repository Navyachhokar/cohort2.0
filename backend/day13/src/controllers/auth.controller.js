const userModel = require("../models/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

async function registerController(req,res){
    const { email, username, password, bio, profileImage} = req.body

    // const isUserExistsByEmail = await userModel.findOne({email})

    // if(isUserExistsByEmail){
    //     return res.status(409).json({
    //         message:"user alredy exists with this email"
    //     })
    // }

    // const isUserExistsByUsername = await userModel.findOne({username})

    // if(isUserExistsByUsername){
    //     return res.status(409).json({
    //         message:"user already exists by username"
    //     })
    // }
    const isUserAlreadyExists = await userModel.findOne({
        $or: [
            {username},
            {email}
        ]
    })

    if (isUserAlreadyExists) {
      const emailExists = isUserAlreadyExists.email == email
      const usernameExists = isUserAlreadyExists.username == username

      if(emailExists && usernameExists){
        res.status(409).json({
          message: "User already exists",
        });
      }
      else if(emailExists){
        res.status(409).json({
          message: "Email already exists",
        });
      } 
      else{
        res.status(409).json({
            message: "Username already exists"
        })
      }
    }

    const hash = await bcrypt.hash(password,10)

    const user = await userModel.create({
        username,
        email,
        bio,
        profileImage,
        password: hash
    })

    const token = jwt.sign({
        /**
         * -user ka data hona chahiye
         * - data unique hona chahiye
         */
        id: user._id,
    }, process.env.JWT_SECRET,{expiresIn: "1d"})

    res.cookie("token", token)
//never share passwords on frontend or in any response as it can lead to security issues
    res.status(201).json({
        message:"User registered successfully",
        user:{
            email:user.email,
            username:user.username,
            bio:user.bio,
            profileImage:user.profileImage
        }
    })
}

async function loginController(req,res){
    const {email, username, password} = req.body
    /**
     * username
     * password
     * 
     * OR
     * 
     * email
     * password
     */
    const user = await userModel.findOne({
        $or:[//array of conditions
            {
                username: username
            },
            {
                email: email
            }
        ]
    })
    if(!user){
        return res.status(404).json({
            message:"User not found"
        })
    }

    const isPasswordValid = await bcrypt.compare(password,user.password)
    if(!isPasswordValid){
        return res.status(401).json({
            message: "password invalid"
        })
    }

    const token = jwt.sign({
        id: user._id,
        username: user.username
    },process.env.JWT_SECRET,{expiresIn: "1d"})

    res.cookie("token",token)
    res.status(200).json({
        message:"User loggedIn successfully",
        user:{
            username: user.username,
            email: user.email,
            bio: user.bio,
            profileImage: user.profileImage
        }
    })
}
module.exports ={ 
    registerController,
    loginController
}