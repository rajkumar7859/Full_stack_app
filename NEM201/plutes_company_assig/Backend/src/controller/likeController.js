const { sendMail } = require("../../utils/sendEmail");
const Post = require("../models/postModel");
const User = require("../models/userModel");

exports.likePost = async (req, res) => {
  const { userId, postId } = req.body;
  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    if (post.likes.includes(userId)) {
      return res
        .status(400)
        .json({ message: "You have already liked this post" });
    }
    post.likes.push(userId);
    await post.save();
    const creator = await User.findById(post.userId);
    const likesCount = post.likes.length-1;
    const threshold = Math.max(100, likesCount * 0.5);
    if (likesCount >= threshold) {
        await sendMail({
          email: creator.email,
          subject: `Your post "${post.data}" is now famous`,
          message: `Congratulations! Your post "${post.data}" has become famous with ${likesCount} likes and is now considered famous. Keep up the good work!`
        });

    }
    res
      .status(200)
      .json({
        message: "Post liked successfully",
        post: { ...post._doc, likes: likesCount },
      });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Error liking post" });
  }
};
