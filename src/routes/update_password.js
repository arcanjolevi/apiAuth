const jwt = require('jsonwebtoken');
const usersDB = require('../model/usersDB');
const env = require('../env');


module.exports = async (req, res) => {
    const token = req.body.token;
    const pass = req.body.password;

    if(!token)
        return res.status(401).send({ auth: false, error: 'No token provided.' });
  
    jwt.verify(token, env.secret, async function(err, decoded) {
        if (err) 
            return res.status(401).send({ auth: false, error: 'Failed to authenticate token.' });
        
        try {            
            await usersDB.updateUser({ _id: decoded.id}, {password: pass});
        } catch (error) {
            return res.send({ error: "password not updated"});
        }
        return res.send({ Mensage: "Password changed"});
    });

}