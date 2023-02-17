const postModel = require('../models/postModel');
const userModel = require('../models/userModel');

// Creating new post and by checking the user is regiester or not 
exports.createPost = async (req, res) => {
    const { userId, data , likes } = req.body;
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const post = new postModel({ userId, data, likes });
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
          const posts = await postModel.find().populate('userId', 'name email').exec();
      
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