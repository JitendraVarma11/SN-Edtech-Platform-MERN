const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port:465,
      secure:true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    let info = await transporter.sendMail({
      from: "StudyNotion || jitendra-varma",
      to: email,
      subject: title,
      html: body,
    });

    console.log(info);
    return info;
  } catch (error) {
    console.log(error.message);
    throw error; // Rethrow the error to propagate it further
  }
};

module.exports = mailSender;
