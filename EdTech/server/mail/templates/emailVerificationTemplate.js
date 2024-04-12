module.exports = (otp) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>OTP verification Email</title>

        <style>
            body {
                background-color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 1rem;
                line-height: 1.4;
                color: #333333;
                margin: 0; 
                padding: 0;
                margin-bottom: 20px;
            }

            .container {
                max-width: 600px;
                margin: 0;
                padding: 20px;
                text-align: center;
            }
            .logo {
                max-width: 200px;
                margin-bottom: 20px;
            }
            .message {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;
            } 
            .support {
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
            }

            .highlight {
                font-weight: bold;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <a href="your publish link of this project">
            <img src="https://i.ibb.co/7Xyj3PC/logo.png" class="logo" alt="Studynotion_logo"></a>
        </div>

        <div class="message">OTP verification Email</div>
        <div class="body">
            <p>Dear User,</p>
            <p>Thank you for registering with Studynotion. To complete your registration, please use the One-Time Password (OTP) to verify your account:</p>
            <h2 class="highlight">${otp}</h2>
            <p>This OTP is valid for 5 minutes. If you did not request your registration, please disregard. Once your account is verified, you will have access to our platform and its features.</p>
        </div>
        <div class="support">If you have any questions or need assistance, please feel free to reach out to <a href="mailto:info@studynotion.com">vjitendra1192002@gmail.com</a>. We are here to help!</div> 
    </body>
    </html>`;
};
