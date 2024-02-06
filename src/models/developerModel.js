const mongoose = require('mongoose');

const developerSchema = new mongoose.Schema({
    username: {
        type: String,
        required:[true, 'Username min 10 characters long are required'],
        min:10, 
        max:40,
        unique: true,
    },
    names: {
        type: String,
        required:[true, 'Names min 10 characters long are required'],
        min:10, 
        max:40,
        unique: true,
    },
    address: {
        type: String,
        required:[true, 'Address min 10 characters long are required'],
        min:10, 
        max:40,
        unique: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        min:6, 
        max:20,
        unique: true,
    },
    github: {
        type: String,
        required: [true, 'Github link is required'],
        min:6, 
        max:20,
        unique: true,
    },
    linkedin: {
        type: String,
        required: [true, 'LinkedIn link is required'],
        min:6, 
        max:20,
        unique: true,
    },
    about: {
        type: String,
        required: [true, 'Developer resume is required'],
        min:6, 
        max:500,
        unique: true,
    },

});

module.exports = mongoose.model('Developer', developerSchema);