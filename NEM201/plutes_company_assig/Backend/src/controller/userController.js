const userModel = require('../models/userModel');

exports.createUser = async (req, res) => {

    try {
        const { name, email, password } = req.body;
        const user = new userModel({ name, email, password });
            await user.save()
           console.log('User created');
           res.status(201).send('User created');
  } catch (err) {
    console.log(`Error creating user: ${err}`);
    res.status(500).send('Error creating user');
  };
};

exports.getUser = async(req, res) => {
//   const userId = req.params.id;
  try {
   const user=await userModel.find()
    if (user) {
        res.send(user);
      } else {
        res.status(404).send('User not found');
      }
  } catch (err) {
    console.log(`Error getting user: ${err}`);
    res.status(500).send('Error getting user');
  };
};


// {
//     "name":"rajkumar2",
//     "email":"raj@gmail.com",
//     "password":"1234"
//     }