const userModel = require('../models/userModel');


// creating new user
exports.createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new userModel({ name, email, password });
            await user.save()
           res.status(201).send('User created');
  } catch (err) {
    console.log(`Error creating user: ${err}`);
    res.status(500).send('Error creating user');
  };
};

// Getting all user 
exports.getUser = async(req, res) => {
  try {
   const user=await userModel.find()
    if (user) {
        res.send(user);
      } else {
        res.status(404).send('User not found');
      }
  } catch (err) {
    console.log(`Error getting user: ${err}` , err.message);
    res.status(500).send('Error getting user');
  };
};

