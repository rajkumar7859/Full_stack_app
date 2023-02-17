const { sendMail } = require('../../utils/sendEmail');
const postModel = require('../models/postModel');
const userModel = require('../models/userModel');

exports.getFamousPosts = async (req, res) => {
  try {
    const posts = await postModel.find().populate('userId').exec();
    const result = await Promise.all(
      posts.map(async (post) => {
        const likesCount = post.likes.length;
        const creator = await userModel.findById(post.userId);

        if (!creator) return null; // Check for null creator
        const threshold = Math.max(10, (creator.likesCount || 0) * 0.5); // Provide default value for likesCount and threshold level in 50% percentent of likes

        if (likesCount >= threshold) {

          // Check if the post is already marked as famous
          if (!post.isFamous) {
            // Send email to the creator of the post
              await sendMail({
                email: creator.email,
                subject: `Your post "${post.data}" is now famous`,
                message: `Congratulations! Your post "${post.data}" has become famous with ${likesCount} likes and is now considered famous. Keep up the good work!`
              });
          }
          // Mark the post as famous in the database
          post.isFamous = true;
          await post.save();
          return { ...post._doc, likes: likesCount }; // Use object literal instead of spread operator
        } else {

          // Mark the post as not famous in the database
          post.isFamous = false;
          await post.save();
          return null;
        }
      })
    );
    const famousPosts = result.filter((post) => post !== null).sort((a, b) => b.likes - a.likes).slice(0, 10); //checking the top 10 famous post
    res.status(200).json(famousPosts);
  } catch (error) {
    res.status(500).json({ error: 'Error getting famous posts' });
  };
};
