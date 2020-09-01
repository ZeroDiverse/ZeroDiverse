const nodemailer = require('nodemailer');
const accesToken = require('../configs/gmail.config');

if (process.env.NODE_ENV === 'dev') {
    require('dotenv').config();
}

const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: "minhquan.nguyen.fr@gmail.com", //your gmail account you used to set the project up in google cloud console"
        clientId: process.env.GMAIL_ID_CLIENT,
        clientSecret: process.env.GMAIL_SECRET_CLIENT,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN,
        accessToken: accesToken//access token variable we defined earlier
    }
});

const sendEmail = (req, res, next) => {
    const { firstname, lastname, email, subject, message } = req.body;

    const mailOptions = {
        from: 'minhquan.nguyen.fr@gmail.com', // sender
        to: 'minhquan.nguyen.fr@gmail.com', // receiver
        subject: subject, // Subject
        html: `<p>Hi, i am ${firstname} ${lastname}.</p><p>My email is ${email}</p><p>Message: </p><p>${message}</p>`
    }

    transport.sendMail(mailOptions, function (err, result) {
        if (err) {
            console.log(err);
            res.send({
                message: err
            })
        } else {
            sendEmailBack(req, res, next);
            res.send({
                message: 'Email has been sent: check your inbox!'
            })
        }
    })
}

const sendEmailBack = (req, res, next) => {
    const {  email } = req.body;

    const mailOptions = {
        from: 'minhquan.nguyen.fr@gmail.com', // sender
        to: email, // receiver
        subject: "Thank you for contacting me, ZeroDiverse with <3", // Subject
        html: `<p>Hi, looks like you have messaged me.</p><p>Thank you i will try to message you back as soon as possible</p>.`
    }

    transport.sendMail(mailOptions, function (err, result) {
        if (err) {
            console.log(err);
            res.send({
                message: err
            })
        } else {
            transport.close();
            res.send({
                message: 'Email has been sent: check your inbox!'
            })
        }
    })
}

module.exports = sendEmail;