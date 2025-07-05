const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3001;

app.use(express.json());

// Configure your email service credentials here
require('dotenv').config();
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Email user from environment variable
    pass: process.env.EMAIL_PASS  // Email password from environment variable
  }
});

app.post('/send-email', (req, res) => {
  const { name, email, phone, service, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_TO, // Recipient email from environment variable
    subject: `New Contact Form Submission from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Service Interested In: ${service}
      Message: ${message}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ success: false, message: 'Failed to send email' });
    } else {
      console.log('Email sent:', info.response);
      return res.json({ success: true, message: 'Email sent successfully' });
    }
  });
});

app.listen(port, () => {
  console.log(`Email forwarding backend listening at http://localhost:${port}`);
});
