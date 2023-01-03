const dotenv = require('dotenv');
const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');

dotenv.config();
express.Router();

//working w/ environment variables
const isDev = process.env.NODE_ENV != 'production';
const transport = {
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.SMTP_TO_EMAIL,
        password: process.env.SMTP_TO_PASSWORD
    }
}

const transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log("ready to send");
    }
})