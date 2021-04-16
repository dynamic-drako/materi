const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function mailer(to, subject, text) {

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "auzanassidqi@gmail.com", // generated ethereal user
      pass: "Q2kWMdPtOLVvBI1w", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Hallo zaaaan 👻" <auzanassidqi@gmail.com>', // sender address
    to, // list of receivers
    subject, // Subject line
    text, // plain text body
    // html: "<b>hello suuup?</b>", // html body
  });

  return info
}

module.exports = mailer