const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const bcrypt=require("bcrypt");
const crypto=require("crypto");

//reset Password Token
exports.resetPasswordToken = async (req, res) => {
  try {
    //get email form body
    const { email } = req.body;

    //check email for this email validation
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.json({
        success: false,
        message: "Your emial is not registered with us",
      });
    }

    //generate token
    const token = crypto.randomBytes(20).toString("hex");

    //update user by adding token adn expiration time
    const updatedDetails = await User.findOneAndUpdate(
      { email: email },
      {
        token: token,
        resetPasswordExpires: Date.now() + 5 * 60 * 1000,
      },
      {
        new: true, //give update respose rather old one
      }
    );

    //create url
    const url = `http://localhost:3000/update-password/${token}`; // fronted link for reset password

    //send mail containing the url
    await mailSender(
      email,
      "Password Reset Link",
      `Password reset link ${url}`
    );

    //return response
    return res.json({
      success: true,
      mesage: "Email sent successfully, please check email and change password",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while sending reset pwd",
    });
  }
};

//reset password

exports.resetPassword = async (req, res) => {
  try {
    //get data
    const { password, confirmPassword, token } = req.body;
    //validation
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "password not match",
      });
    }

    //get user detail from db uding token
    const userDetails = await User.findOne({ token: token });

    //if no entry-invalid token
    if (!userDetails) {
      return res.json({
        success: false,
        message: "Token is invalid",
      });
    }
    //check token time
    if (userDetails.resetPasswordExpires < Date.now()) {
      return res.json({
        success: false,
        message: "Token is expired, please genreate new token",
      });
    }

    //hash pwd
    const hashedPassword = await bcrypt.hash(password, 10);

    //update pwd
    await User.findOneAndUpdate(
      { token: token },
      { password: hashedPassword },
      { new: true }
    );
    
    //return res
    return res.status(200).json({
      success: true,
      message: "Passwrod reset successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "something went wrong, plz try again",
    });
  }
};
