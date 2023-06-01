const jwt = require('jsonwebtoken');
require('dotenv').config()

const authentication = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, process.env.secret, async (err, decode) => {
            if (decode) {
                req.body.userid = decode.id;
                next()
            } else {
                res.status(201).send({
                    'msg': 'Error'
                })
            }
        })
    } else {
        res.status(501).send({
            'msg': 'Please Login..'
        })
    }
}

module.exports = { authentication }