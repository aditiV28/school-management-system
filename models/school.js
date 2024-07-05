const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    address: {type: String, required: true, },
    admin: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('School', schoolSchema);