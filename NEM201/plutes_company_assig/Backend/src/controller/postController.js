const Post = require('../models/postModel');
const User = require('../models/userModel');

exports.createPost = async (req, res) => {

    const { userId, data , likes } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const post = new Post({ userId, data, likes });
    try {
      await post.save();
      res.status(201).json({ message: 'Post created successfully', post });
    } catch (error) {
      res.status(500).json({ error: 'Error creating post' });
    }
};


// get all post data
exports.getPost=async(req,res)=>{
        try {
          const posts = await Post.find().populate('userId', 'name email').exec();
      
          res.json(posts.map(post => ({
            id: post._id,
            data: post.data,
            likes: post.likes.length-1,
            user: post.userId
          })));
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal server error' });
        }
      };