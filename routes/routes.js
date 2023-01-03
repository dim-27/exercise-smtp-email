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
    
}
