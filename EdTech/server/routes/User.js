const express = require("express");
const router = express.Router();

const {
    login,
    signUp,
    sendOTP,
    changePassword,
}=require("../controllers/Auth");

const {
    resetPasswordToken,
    resetPassword,
}=require("../controllers/ResetPassword");

const {auth}=require("../middlewares/auth");

//Route for login signup and authentication

//Route for user login
router.post("/login", login)

//Routes for user signup
router.post("/signup", signUp)

//routes for sending otp to the user's email
router.post("/sendotp", sendOTP)

//route for changing the password
router.post("/changepassword", auth, changePassword);

// **************************************************
//                      Reset Password
// **************************************************

//routes for generating a reset password token
router.post("/reset-password-token",resetPasswordToken)

//routes for reseting users password
router.post("/reset-password",resetPassword)

//Exports the router for user in the main application


module.exports=router;


