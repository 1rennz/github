var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'renamaciel45@gmail.com',
  auth: {
    user: 'renamaciel45@gmail.com',
    pass: ''
  }
});

var mailOptions = {
  from: 'gustavocrispimtec@gmail.com',
  to: 'gustavocrispimtec@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});