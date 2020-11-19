const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        trim: true
    }
});

UserSchema.pre('save', async (next) => {
    const user = this;

    if(user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 16);
    }

    next();
});

module.exports = mongoose.model('users', UserSchema);