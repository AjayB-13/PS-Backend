const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail', 
auth: {
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASS,
}
});


const sendPasswordResetEmail = (to, resetLink) => {
  const mailOptions = {
    to: to,
    from: process.env.EMAIL_USER,
    subject: 'Password Reset Request',
    html: `<p>You are receiving this because you have requested the reset of the password for your account.</p>
           <p>Please click on the following link, or paste this into your browser to complete the process:</p>
           <p><a href="${resetLink}">Reset Password Link</a></p>
           <p>If you did not request this, please ignore this email and your password will remain unchanged.</p>`,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error('Error sending email:', err);
        reject(err);
      } else {
        resolve(info);
      }
    });
  });
};

module.exports = { sendPasswordResetEmail };