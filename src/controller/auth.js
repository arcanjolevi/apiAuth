const express = require('express');
const userModel = require('../model/user');

const router = express.Router();

router.post('register', async (req, res) => {
    try{
        const user = await userModel.insert("myproject", "document", req.body);

        return res.send({user});
    }catch(error){
        return res.status(400).send({ error: "Registration failde" });
    }
});


module.exports = (app) => app.use('/auth', router);