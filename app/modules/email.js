var mailtransporter = require("../config/email.config")
const dotenv = require('dotenv');

dotenv.config();

const MailOptions = (useremail, subject, body) => {

    var mailOptions = {
        from: `${process.env.SMTP_NAME} <${process.env.SMTP_EMAIL}>`,
        to: useremail,
        subject: subject,
        text: body
      };

    return mailOptions
}

const  SendEmail = async (mailOptions) => {
    
     return await mailtransporter.sendMail(mailOptions)
    
}



module.exports = {
    MailOptions,
    SendEmail
}