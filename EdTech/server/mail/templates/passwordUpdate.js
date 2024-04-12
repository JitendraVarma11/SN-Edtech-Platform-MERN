exports.passwordUpdate=(name,email)=>{
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Password Update Confirmation</title>

        <style>
            body{
                background-color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 1rem;
                line-height: 1.4;
                color: #333333;
                margin: 0; 
                margin-bottom: 20px;
                padding: 0;
            }

            .container{
                max-width: 600px;
                margin: 0;
                padding: 20px;
                text-align: center;
            }
            .logo{
                max-width: 200px;
                margin-bottom: 20px;
            }
            .message{
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;
            }
            .support{
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
            }

            .highlight{
                font-weight: bold;
            }


        </style>
    </head>
    <body>
        <div class="container">
            <a href="your publish link of this project"><img src="logo" class="https://i.ibb.co/7Xyj3PC/logo.png" alt="Studynotion_logo"></a>
        </div>

        <div class="message">Password Update Confirmation</div>
        <div class="body">
            <p>Dear, ${name},</p>
            <p>Your Password has been successfully updated for the email<span class="highlight">${email}.</span></p>
            <p>If you did not request this password change, please contact us immediately to secure your account</p>
        </div>
        <div class="support">If you have any questions or need assistance, please feel free to reach out to <a href="mailto:info@studynotion.com">vjitendra1192002@gmail.com</a>. We are here to helo! </div> 
        
    </body>
    </html>`;
}