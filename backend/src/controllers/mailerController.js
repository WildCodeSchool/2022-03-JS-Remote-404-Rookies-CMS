const nodemailer = require("nodemailer");
require("dotenv").config();
const models = require("../models");

class sendMailer {
  static sendMail = async (req, res) => {
    const reception = await models.adminmail.find();

    const { email, category, message, fullname } = req.body;

    const transporter = await nodemailer.createTransport({
      host: process.env.SMTP_SENDIN,
      port: process.env.SMTP_PORT_SENDIN,
      secure: false,
      auth: {
        user: process.env.SMTP_SENDIN_USER,
        pass: process.env.SMTP_SENDIN_PASSWORD,
      },
    });

    const mailOptions = {
      from: `${email}`,
      to: `${reception[0][0].AdminMail}`, // this is the address to which the email will be sent
      subject: `Mail from ${fullname} come from our website`,
      text: `${message} \n\n categorie: ${category} \n\n Email: ${email}`,
      html: `<p>${message}</p> <p>categorie: ${category}</p> <p>Email: ${email}</p>`,
    };

    return transporter
      .sendMail(mailOptions)
      .then((info) => {
        res.status(200).send(info);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  };
}

module.exports = sendMailer;
