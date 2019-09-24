const mongoose = require('mongoose');

const Note = new mongoose.Schema({
    title: String,
    content: {
        type: String,
    },
    author: String,
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', Note);