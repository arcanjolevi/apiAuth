const jwt = require('jsonwebtoken');
const env = require('../env');

module.exports = (req, res, next) => {
    var token = req.headers.token;
    console.log("token: ", token);
    if (!token) 
        return res.status(401).send({ auth: false, error: 'No token provided.' });
  
    jwt.verify(token, env.secret, function(err, decoded) {
        if (err) 
            return res.status(401).send({ auth: false, error: 'Failed to authenticate token.' });
    
    // se tudo estiver ok, salva no request para uso posterior
    req.userId = decoded.id;
    next();
  });
};