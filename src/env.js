var config = {
    COMPANY: "Empresa",
    PORT: 3333,
    DB_URL: "mongodb://172.17.0.2:27017/base",
    HASH_N: 7,
    secret: "Wa@&SUxj@8J9T#qaE6@d@_28_2B@5wPK",
    TOKEN_TIME: 31536000,
    RECOVERY_PASS_TIME: 300,
    mail: {
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
        user: "arcanjolevi@gmail.com",
        pass: "cambio--24google"
        },
        recovery_pass_theme: "Recuperar senha",
    }
};


module.exports = config;







