const nodemailer = require("nodemailer");

exports.postService = () => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: 'stanlymia98@gmail.com',
      pass: 'HakeroK1989ok'
    }
  });

  const info = transporter.sendMail({
    from: 'stanlymia98@gmail.com',
    to: "stanlymia@list.ru",
    subject: "Hello ✔",
    text: "Hello world?",
    html: "<b>Your verification code is 8123</b>"
  });

  transporter.sendMail(info, (error, info) => {
    if (error) {
      return console.log(error);
    } else {
      console.log('Message sent: %s', info.messageId);
    }
  });
};
