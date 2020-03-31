const jwt = require('jsonwebtoken');
const env = require('../env');

function generateToken( userID, time){
    return jwt.sign({ id: userID }, env.secret, {
        expiresIn: time
    });
}



module.exports = { generateToken };
