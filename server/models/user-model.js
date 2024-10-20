const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/deliverease")
const User = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    type: { type: String, required: true },
    requests: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'request' }
    ]
})

module.exports = mongoose.model('User', User);
