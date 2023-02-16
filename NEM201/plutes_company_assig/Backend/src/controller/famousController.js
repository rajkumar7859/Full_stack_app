const Post = require('../models/postModel');
const User = require('../models/userModel');

exports.getFamousPosts = async (req, res) => {
    try {
      const posts = await Post.find().populate('userId').exec();
      const result = await Promise.all(
        posts.map(async (post) => {
          const likesCount = post.likes.length;
          const creator = await User.findById(post.userId);
          if (!creator) return null; // check for null creator
          const threshold = Math.max(100, (creator.likesCount || 0) * 0.5); // provide default value for likesCount
          if (likesCount >= threshold) {
            return { ...post._doc, likes: likesCount }; // use object literal instead of spread operator
          } else {
            return null;
          }
        })
      );
      const famousPosts = result.filter((post) => post !== null).sort((a, b) => b.likes - a.likes).slice(0, 10);
      res.status(200).json(famousPosts);
      console.log("famous posts", famousPosts)
    } catch (error) {
      res.status(500).json({ error: 'Error getting famous posts' })
      console.log("famous controller error",error.message);
    };
};
