const express = require('express')
const userRouter = express.Router()
const { userModel } = require('../model/userModel')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


// user register
userRouter.post('/register', async (req, res) => {

    const { name, email, password } = req.body
    try {
        bcrypt.hash(password, 5, async (err, secret) => {
            if (err) {
                console.log(err)
            } else {
                const user = new userModel({ name, email, password: secret })
                await user.save()
                res.status(201).send("User registered successfully")
            }
        })
    } catch (error) {
        console.log({ "err": "something went wrong" })
    }
});


// user login 
userRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.find({ email })
        if (user.length > 0) {
            bcrypt.compare(password, user[0].password, (err, decode) => {
                if (decode) {
                    const token = jwt.sign({ userID: user[0]._id }, process.env.secret)
                    res.status(201).send({ 'message': "Login Successfull", 'token': token })
                } else {
                    res.send('Check your email/password')
                }
            })
        } else {
            res.send('somthing wrong')
        }
    } catch (error) {
        console.log({ 'err': 'something wrong' })
    }
})

userRouter.patch("/user/:id/reset", async (req, res) => {
    try {
        let { oldPass, newPass } = req.body;
        let id = req.params.id;
        let user = await userModel.find({ _id: id });
        if (user.length == 0) {
            res.status(402).send({ "msg": "Invalid user did not match id" })
        } else {
            // console.log(user);
            bcrypt.compare(oldPass, user[0].password, async (err, result) => {
                if (result) {
                    let user = await userModel.findByIdAndUpdate({ _id: id }, { password: newPass });
                    console.log(user);
                    res.status(204).send({ "msg": "password has been reset" })
                } else {
                    res.status(402).send({ "msg": "Invalid old password " })
                }
            })
        }
    } catch (error) {
        console.log(error);
        res.status(501).send({ "msg": error })
    }
});

module.exports = { userRouter }