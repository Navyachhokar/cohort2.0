const express = require("express")
const userController = require("../controllers/user.controller")
const identifyUser = require("../middlewares/auth.middleware")


const userRouter = express.Router(); 

// Accept/Reject request
// POST request to update the status
userRouter.post('/follow/respond',identifyUser,userController.respondToFollowRequestController);

/**
 * @route POST /api/users/follow/:userid
 * @description Follow a user
 * @access Private
 */
userRouter.post("/follow/:username", identifyUser, userController.followUserController)

/**
 * @routes POST /api/users/unfollow/:userid
 * @description Unfollow a user
 * @access Private
 */

userRouter.post("/unfollow/:username", identifyUser, userController.unfollowUserController)

userRouter.get("/sidebar", identifyUser, userController.getSidebarData);

userRouter.get(
  "/requests",
  identifyUser,
  userController.getPendingFollowRequests,
);


module.exports = userRouter