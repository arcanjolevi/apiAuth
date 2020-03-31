const usersDB = require('../model/usersDB');
const jwToken = require('../util/token');
const env = require('../env');



module.exports = async (req, res) => {
    const email = req.body.email;

    const user = await usersDB.findUser( {email: email} );   
    
    if(!user)
        return res.status(400).send({ error: "User not found"});
    
    const token = jwToken.generateToken(user._id, env.RECOVERY_PASS_TIME);

    return res.send({ error: "Configure os emails", token: token});
    try {
        await mail.sendRecoveryEmail(token, email, user.name);
        return res.send({ Mensage: "Email enviado"});
    } catch (error) {
        console.log(error);
        return res.send({ error: "Email not sent"});
    }
}