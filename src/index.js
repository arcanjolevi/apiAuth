const express = require('express');
const bodyParser = require('body-parser');

const bcrypt = require('bcryptjs');

const env = require('./env');

const usersDB = require('./model/usersDB');

const jwt = require('jsonwebtoken');

const app = express();

const auth = require('./routes/auth');


function generateToken( userID ){
    return jwt.sign({ id: userID }, env.secret, {
        expiresIn: env.TOKEN_TIME
    });
}



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/oi', auth, (req, res) => {
    return res.send("ok");
});


app.post('/register/auth', async (req, res) =>{
    try{

        console.log('registrando...');

        if(await usersDB.findUser({ email: req.body.email }))
            return res.status(400).send({ error: "user already exists"});

        var user = await usersDB.insertUser(req.body);

        user.password = "";

        var tok = generateToken(user._id);

        return res.send({user, token: tok});
    }catch(error){
        return res.status(400).send({ error: "Registration fail" });
    }
});


app.post('/authenticate', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await usersDB.findUser( {email: email} );   

    if(!user)
        return res.status(400).send({ error: "User not found"});


    if(! await bcrypt.compare(password, user.password))
        return res.status(400).send({ error: "Invalidad Pasword"});

    user.password = "";
    return res.send({ user , token: generateToken(user._id) });
});

app.listen(env.PORT, () => {
    console.log('Server running');
});
