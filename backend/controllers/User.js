const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const userModel = require("../models/UserSchema");
const register = (req, res) => {
  const { firstName, lastName, age, email, password } = req.body;
  
  const newUser = new userModel({
    firstName,
    lastName,
    age,
    email,
    password,
    role : '6817c134c6fe59272fc990f7',
  });
  console.log(newUser.email);
  
  newUser
    .save()
    .then((result) => {
        console.log('result' , result);
        
      res.status(201).json({
        success: true,
        message: "Account Created Successfully",
        author: result,
      });
    })
    .catch((err) => {
        if (err.keyPattern) {
          return res.status(409).json({
            success: false,
            message: `The email already exists`,
          });
        }
        res.status(500).json({
          success: false,
          message: `Server Error`,
          err: err.message,
        });
      });
};


const login = (req, res) => {
    const password = req.body.password;
    const email = req.body.email.toLowerCase();
    userModel
      .findOne({ email })
      .then(async (result) => {
        if (!result) {
          return res.status(403).json({
            success: false,
            message: `The email doesn't exist or The password `,
          });
        }
        try {
          const valid = await bcrypt.compare(password, result.password);
          if (!valid) {
            return res.status(403).json({
              success: false,
              message: `The email doesn't exist or The password `,
            });
          }
          const payload = {
            userId: result._id,
            author: result.firstName,
            role: result.role,
           
          };
  
          const options = {
            expiresIn: "60m",
          };
          const token = jwt.sign(payload, process.env.SECRET, options);
          res.status(200).json({
            success: true,
            message: `Valid login credentials`,
            token: token,
          });
        } catch (error) {
          throw new Error(error.message);
        }
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: `Server Error`,
          err: err.message,
        });
      });
  };
module.exports = {
    register,
    login,
  };