const Post = require('../models/postModel');
const User = require('../models/userModel');

exports.createPost = async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).json(post);
    
    // Check if post is famous
    const posts = await Post.find({ userId: post.userId });
    const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);
    const averageLikes = totalLikes / posts.length;
    if (post.likes > averageLikes * 2) {
      const transporter = nodemailer.createTransport({
        // Set up your email configuration here
      });
      const mailOptions = {
        from: 'sender@example.com',
        to: User.email,
        subject: 'Your post is famous!',
        text: `Congratulations, your post "${post.data}" has received ${post.likes} likes and is now famous!`,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
        } else {
          console.log(`Email sent: ${info.response}`);
        }
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating post');
  }
};


// get all post data
exports.getPost=async(req,res)=>{
        try {
          const posts = await Post.find().populate('userId', 'name email').exec();
      
          res.json(posts.map(post => ({
            id: post._id,
            data: post.data,
            likes: post.likes,
            user: post.userId
          })));
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal server error' });
        }
      };