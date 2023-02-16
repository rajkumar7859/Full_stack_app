const Post = require('../models/postModel');
const User = require('../models/userModel');

exports.likePost = async (req, res) => {
    const { userId, postId } = req.body;
    try {
      const post = await Post.findById(postId);
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
      if (post.likes.includes(userId)) {
        return res.status(400).json({ message: 'You have already liked this post' });
      }
      post.likes.push(userId);
      await post.save();
      const creator = await User.findById(post.userId);
      const likesCount = post.likes.length;
      const threshold = Math.max(100, likesCount * 0.5);
      if (likesCount >= threshold) {
        sendMail(
          `Your post "${post.data}" is now famous`,
          `Congratulations! Your post has received ${likesCount} likes and is now considered famous. Keep up the good work!`
        );
      }
      res.status(200).json({ message: 'Post liked successfully', post: { ...post._doc, likes: likesCount } });
    } catch (error) {
      res.status(500).json({ error: 'Error liking post' });
    }
  };