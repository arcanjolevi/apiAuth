const nm = require('nodemailer');
const env = require('../env');
const bodyMail = require('./recoveryemail');

var transporter = nm.createTransport({
    host: env.mail.host,
    port: env.mail.port,
    secure: env.mail.secure,
    auth: {
        user: env.mail.auth.user,
        pass: env.mail.auth.pass
    }
});

var sendRecoveryEmail = (token, toEmail, userName) => {

    const texto = `<!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <meta http-equiv='X-UA-Compatible' content='ie=edge'>
        <title>Copiar HTML</title>
    </head>
    <body>
        
        Olá ${userName}, <br>
        Você solicitou sua senha por esquecimento.<br>
        Aqui está o token para atulizar sua senha, copie e cole no app onde solicitado:
        <br><br><br>
        <strong>${token}</strong>
        <br>
        
    </body>
    </html>`

    const content = {
        from: "[" + env.COMPANY + "] " + env.mail.auth.user,
        to: toEmail,
        subject: env.mail.recovery_pass_theme,
        text: "",
        html: texto 
    }
    
    transporter.sendMail(content, (error, data) => {
        if(error){
            console.log(error);
            console.log("Not Sent\n\n\n");
            
        }else{
            console.log("Email Sent");
        }    
    });
};


module.exports = {sendRecoveryEmail};
