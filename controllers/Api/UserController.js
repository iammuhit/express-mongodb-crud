const mongoose = require('mongoose');

const Users = mongoose.model('users');

exports.index = async (req, res) => {
    const users = await Users.find();

    res.json({
        status: 'success',
        data: {
            users: users
        }
    });
};

exports.single = async (req, res) => {
    const id = req.params.id;

    await Users.findById({ _id: id }, (err, doc) => {
        if(err) {
            res.status(500).json({
                status: 'error',
                code: 500,
                message: 'Something went wrong.'
            });
        } else {
            res.status(200).json({
                status: 'success',
                data: doc
            });
        }
    });
};

exports.create = async (req, res) => {
    const user = await new Users();

    user.fullname = req.body.fullname;
    user.email = req.body.email;
    user.password = req.body.password;

    user.save((err, doc) => {
        if(err) {
            res.status(500).json({
                status: 'error',
                code: 500,
                message: 'Something went wrong.'
            });
        } else {
            res.status(200).json({
                status: 'success',
                message: 'The user has been created successfully.',
                data: doc
            });
        }
    });
};

exports.update = async (req, res) => {
    const id = req.params.id;

    await Users.findByIdAndUpdate({ _id: id }, { $set: req.body }, (err, doc) => {
        if(err) {
            res.status(500).json({
                status: 'error',
                code: 500,
                message: 'Something went wrong.'
            });
        } else {
            res.status(200).json({
                status: 'success',
                message: 'The user has been updated successfully.',
                data: doc
            });
        }
    });
};

exports.delete = async (req, res) => {
    const id = req.params.id;

    await Users.deleteOne({ _id: id }, (err, doc) => {
        if(err) {
            res.status(500).json({
                status: 'error',
                code: 500,
                message: 'Something went wrong.'
            });
        } else {
            res.status(200).json({
                status: 'success',
                message: 'The user has been deleted successfully.'
            });
        }
    });
};