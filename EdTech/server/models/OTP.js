const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");
const emailVerificationTemplate = require("../mail/templates/emailVerificationTemplate");

const OTPSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    otp: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        expires: 5 * 60,   
    }
});

// Function to send verification email
async function sendVerificationemail(email, otp) {
    try {
        const mailResponse = await mailSender(email, "Verification Email from StudyNotion", emailVerificationTemplate(otp));
        console.log("Email sent successfully", mailResponse);
    } catch (error) {
        console.log("Error occurred while sending email", error);
        throw error;
    }
}

// Pre-middleware to validate before entering the entry into the database
OTPSchema.pre("save", async function(next) {
    await sendVerificationemail(this.email, this.otp);
    next();
});

module.exports = mongoose.model("OTP", OTPSchema);
