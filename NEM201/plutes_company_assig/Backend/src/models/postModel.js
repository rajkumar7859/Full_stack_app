const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  data: { type: String, required: true },
  likes: { type:[], default: 0 },
});

module.exports = mongoose.model("Post", postSchema);
