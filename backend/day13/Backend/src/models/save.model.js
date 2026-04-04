const mongoose = require("mongoose");

const saveSchema = new mongoose.Schema(
  {
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "posts",
      required: [true, "post id is required for saving a post"],
    },
    user: {
      type: String,
      required: [true, "username id required for saving a post"],
    },
  },
  {
    timestamps: true,
  },
);

saveSchema.index({ post: 1, user: 1 }, { unique: true });

const saveModel = mongoose.model("saves", saveSchema);

module.exports = saveModel;
