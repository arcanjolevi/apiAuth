const express = require('express');
const bcrypt = require('bcryptjs');
const myToken = require('../util/token');
const usersDB = require('../model/usersDB');
const env = require('../env');


module.exports = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await usersDB.findUser( {email: email} );   

    if(!user)
        return res.status(400).send({ error: "User not found"});

    if(! await bcrypt.compare(password, user.password))
        return res.status(400).send({ error: "Invalidad Pasword"});

    user.password = "";
    return res.send({ user , token: myToken.generateToken(user._id, env.TOKEN_TIME) });
}