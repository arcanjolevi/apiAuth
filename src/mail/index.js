const nm = require('nodemailer');

var transporter = nm.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: "",
        pass: ""
    }
});

transporter.sendMail({
    from: "",
    to: "",
    subject: "Tema",
    text: "",

}, (error, data) => {
    if(error){
        console.log("Erro ocorrido\n\n\n");
        console.log(error);
    }else{
        console.log("Email enviado");
    }

});
