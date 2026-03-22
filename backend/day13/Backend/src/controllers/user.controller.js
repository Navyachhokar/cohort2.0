const followModel = require("../models/follow.model")
const userModel = require("../models/user.model")

async function followUserController(req,res){
    const followerUsername = req.user.username
    const followeeUsername = req.params.username

    if(followeeUsername == followerUsername){
        return res.status(400).json({
            message: "You cannot follow yourself"
        })
    }

    const isFolloweeExists = await userModel.findOne({
        username: followeeUsername
    })

    if(!isFolloweeExists){
        return res.status(404).json({
            message: "User you are trying to follow does not exist"
        })
    }

    const isAlreadyFollowing = await followModel.findOne({
        follower: followerUsername,
        followee: followeeUsername
    })

    if(isAlreadyFollowing){
        const status = isAlreadyFollowing.status;
        return res.status(200).json({
            message: status === 'pending' ?`Your follow request is pending` : `You are already following ${followeeUsername}`,
            follow: isAlreadyFollowing
        })
    }

    const followRecord = await followModel.create({
        follower: followerUsername,
        followee: followeeUsername,
    })

    res.status(201).json({
        message: `You are now following ${followeeUsername}`,
        follow: followRecord
    })
}

async function unfollowUserController(req,res){
    const followerUsername = req.user.username
    const followeeUsername = req.params.username

    const iSUserFollowing = await followModel.findOne({
        follower: followerUsername,
        followee: followeeUsername
    })

    if(!iSUserFollowing){
        return res.status(200).json({
            message: `You are not following ${followeeUsername}`
        })
    }

    await followModel.findByIdAndDelete(iSUserFollowing._id)

    res.status(200).json({
        message: `You have unfollowed ${followeeUsername}`
    })
}

async function respondToFollowRequestController(req, res) {
  const followeeUsername = req.user.username; 
  const { requestId, action } = req.body; 
  if (!["accepted", "rejected"].includes(action)) {
    return res
      .status(400)
      .json({ message: "Invalid action. Use 'accepted' or 'rejected'" });
  }

  const followRequest = await followModel.findOne({
    _id: requestId,
    followee: followeeUsername,
  });

  if (!followRequest) {
    return res
      .status(404)
      .json({ message: "Follow request not found or unauthorized" });
  }

  if (action === "accepted") {
    followRequest.status = "accepted";
    await followRequest.save();
    return res
      .status(200)
      .json({ message: "Follow request accepted", follow: followRequest });
  } else {
    await followModel.findByIdAndDelete(requestId);
    return res
      .status(200)
      .json({ message: "Follow request rejected and removed" });
  }
}

module.exports = {
    followUserController,
    unfollowUserController,
    respondToFollowRequestController
}