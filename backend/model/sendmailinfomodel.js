var mongoose = require('mongoose');

var userschema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone:{
        type: String
    },
    message:{
        type: String
    } 
});

module.exports = mongoose.model('sendmailinfo', userschema);