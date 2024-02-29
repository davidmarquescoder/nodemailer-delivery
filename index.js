// LEIA A DOCUMENTAÇÃO NO ARQUIVO "README.md".
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

// Configurar o transporte
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: `${process.env.EMAIL}`,
    pass: `${process.env.APP_PASSWORD}`
  }
});

// Configurar os detalhes do email
const mailOptions = {
  from: `${process.env.EMAIL}`,
  to: 'destinatário@hotmail.com',
  subject: 'Testando envio de e-mail',
  html: '<h1>Hello world</h1>',
};


// Enviar o email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Erro ao enviar o email:', error);
  } else {
    console.log('Email enviado com sucesso!');
  }
});
