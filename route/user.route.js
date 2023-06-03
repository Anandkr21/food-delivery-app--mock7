require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { UserModel } = require('../model/user.model');


const userRoute = express.Router();

userRoute.post('/register', async (req, res) => {
    try {
        const { name, email, password, address } = req.body;
        const searchUser = await UserModel.find({ email });
        if (searchUser.length >= 1) {
            res.status(409).send({
                status: false,
                msg: 'User already Registered.'
            })
        } else {
            bcrypt.hash(password, 6, async (err, hash) => {
                const user = new UserModel({ name, email, password: hash, address });
                await user.save();
                res.status(200).send({
                    status: true,
                    msg: 'User Successfully Registered.'
                })
            })
        }
    } catch {
        res.status(404).send({
            status: false,
            msg: 'Error in Registration'
        })
    }
})


userRoute.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const loginUser = await UserModel.find({ email });
        if (loginUser.length >= 1) {
            bcrypt.compare(password, loginUser[0].password, async (err, result) => {
                if (result) {
                    const token = jwt.sign({ "user-id": loginUser[0]._id }, process.env.secret_key, { expiresIn: '7d' });
                    res.status(200).send({
                        status: true,
                        msg: 'Login Successful',
                        token: token
                        // data: loginUser[0]
                    })
                } else {
                    res.status(404).send({
                        status: false,
                        msg: 'Wrong Credentials.'
                    })
                }
            })
        }
    } catch {
        res.status(404).send({
            status: false,
            msg: 'Error in Login..Please try again..'
        })
    }
})


userRoute.patch('/user/:id/reset', async (req, res) => {
    try {
        const id = req.params.id;
        const { password } = req.body;
        const hashPassword = bcrypt.hashSync(password, 6);
        await UserModel.updateOne({ _id: id }, { $set: { password: hashPassword } });
        res.status(200).send({
            status: true,
            msg: 'Password has been updated'
        })
    } catch {
        res.status(404).send({
            status: false,
            msg: 'Error while updating the password.'
        })
    }
})





module.exports = { userRoute };



