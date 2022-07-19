require("dotenv").config();
const express = require("express");
const path = require('path')
const app = express();
const port = process.env.PORT || 3000;
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  // host: 'smtp.gmail.com',
  // port: '587',
  service: "gmail",
  auth: {
    type: 'OAuth2',
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENT_ID,
    clientSecret: process.env.OAUTH_CLIENT_SECRETE,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
accessToken: process.env.OAUTH_ACCESS_TOKEN    
  },
  // tls: {
  //   rejectUnauthorized: false
  // }
});

// let mailOptions = {
//   from: 'walwyde@gmail.com',
//   to: 'walwyde@@gmail.com',
//   subject: 'Nodemailer Project',
//   text: 'Hi from your nodemailer project'
// };



// app.use(express.urlencoded({ extended: true }));


const mailOptions = {
  from: process.env.MAIL_USERNAME, // Sender address
  to: process.env.MAIL_USERNAME, // List of recipients
  subject: 'Node Mailer', // Subject line
  text: 'new nodemail'
  // attachments: [
  //    { filename: 'profile.png', path: './images/profile.png' }
  // ]
};

transporter.sendMail(mailOptions, function(err, data) {
  if (err) {
    console.log("Error " + err);
  } else {
    console.log("Email sent successfully");
  }
});

app.listen(port, () => {
  console.log(`connected on ${port}`);
});

console.log(process.env.MAIL_PASSWORD)