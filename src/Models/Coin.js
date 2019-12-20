const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    description: String,
});

module.exports = mongoose.model('User', UserSchema);