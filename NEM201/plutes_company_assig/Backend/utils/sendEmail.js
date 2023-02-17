const nodemailer = require('nodemailer');

exports.sendMail = async (options) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    service:process.env.SMPT_SERVICE,
    // secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMPT_MAIL, 
      pass: process.env.SMPT_PASSWORD 
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: process.env.SMPT_MAIL, // sender address
    to:options.email, // list of receivers
    subject:options.subject, // Subject line
    html:options.message, // html body
  });

  console.log("Message sent: %s", info.messageId);
}
