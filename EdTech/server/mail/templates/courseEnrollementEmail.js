exports.courseEnrollmentEmail=(courseName, name)=>{
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Course Registration Certification</title>

        <style>
            body{
                background-color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 1rem;
                line-height: 1.4;
                color: #333333;
                margin: 0; 
                padding: 0;
                margin-bottom: 20px;
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
            .cta{
                display: inline-block;
                padding: 10px 20px;
                background-color: #ffd60a;
                color: #000000;
                text-decoration: none;
                border-radius: 5px;
                font-size: 1rem;
                font-weight: bold;
                margin-top: 20px;
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
            <a href="https://sn-edtech-platform.vercel.app/">
            <img src="https://i.ibb.co/7Xyj3PC/logo.png" class="logo" alt="Studynotion_logo"></a>
        </div>

        <div class="message">Course Registration Certification</div>
        <div class="body">
            <p>Dear, ${name},</p>
            <p>You have successfully registerd for the course <span class="highlight">${courseName}</span>we are excited to have you as a participants!</p>
            <p>please log in to your learning dashboard to access the course materials and start your learning.</p>
            <a href="link you project/dashboard" class="cta">Go to Dashboard</a>
        </div>
        <div class="support">If you have any questions or need assistance, please feel free to reach out to <a href="mailto:info@studynotion.com">vjitendra1192002@gmail.com</a>. We are here to helo! </div> 
        
    </body>
    </html>`;
};
