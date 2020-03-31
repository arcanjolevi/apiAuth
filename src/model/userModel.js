const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const env = require('../env');


var Schema = mongoose.Schema;

var userSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		unique: true,
		lowercase: true,
		required: true	
	},
	password: {
		type: String,
		required: true
	}

}, { collection: 'user'});



module.exports = mongoose.model('UserData', userSchema);