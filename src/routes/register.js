const usersDB = require('../model/usersDB');
const myToken = require('../util/token');
const env = require('../env');


module.exports = async (req, res) =>{
    try{
        console.log('registrando...');

        if(await usersDB.findUser({ email: req.body.email }))
            return res.status(400).send({ error: "user already exists"});

        var user = await usersDB.insertUser(req.body);

        user.password = "";

        var tok = myToken.generateToken(user._id, env.TOKEN_TIME);

        return res.send({user, token: tok});
    }catch(error){
        return res.status(400).send({ error: "Registration fail" });
    }
};