const mongoose = require('mongoose');
const UserModel = require('./userModel');
const env = require('../env');
const crypt = require('bcryptjs');

var insertUser = async function(user) {
    mongoose.connect(env.DB_URL, { useCreateIndex:true, useNewUrlParser: true, useUnifiedTopology: true });

   
    user.password = await crypt.hash(user.password, 10);
    
    
    var data = new UserModel(user);
    var inserted = await data.save();
    
    mongoose.disconnect();

    return inserted;
};

var findUser = async function(obj) {
    mongoose.connect(env.DB_URL, { useCreateIndex:true, useNewUrlParser: true, useUnifiedTopology: true });
   

    var exist = await UserModel.findOne(obj);
    
    
    mongoose.disconnect();

    return exist;
};

var updateUser = async function(queryObj, updateObj) {
    mongoose.connect(env.DB_URL, { useCreateIndex:true, useNewUrlParser: true, useUnifiedTopology: true });
    
    if(updateObj.password)
        updateObj.password = await crypt.hash(updateObj.password, 10);

    await UserModel.updateOne(queryObj, updateObj);
    
    mongoose.disconnect();

};


module.exports = {insertUser, findUser, updateUser};
