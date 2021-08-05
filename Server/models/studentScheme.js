var mongoose = require('mongoose');
var appScheme = mongoose.Schema;

var studentScheme = new appScheme({
    id : String,
    fullName : String,
    email : String,
    faculty : String,
    birthDate : Date,
    grades : [{
        date : Date,
        grade : Number
    }]

},{versionKey: false})

module.exports = mongoose.model('students',studentScheme);