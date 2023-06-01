const express = require("express")
const orderRouter = express.Router()
const { orderModel } = require('../model/orderModel');


orderRouter.post('/orders', async (req, res) => {
    try {
        const { user, restaurant, items, totalPrice, deliveryAddress, status } = req.body;
        const newOrder = new orderModel({
            user, restaurant, items, totalPrice, deliveryAddress, status
        });
        await newOrder.save()
        res.status(201).send({
            status: true,
            msg: "Your Order has been Placed."
        })
    } catch {
        res.status(404).send({
            status: false,
            msg: 'Error in placing the Order.'
        })
    }
})


orderRouter.get('/orders/:id', async (req, res) => {
    try {
        const id = req.params.id
        const data = await orderModel.find({ _id: id });
        res.status(200).send({
            status: true,
            msg: `Order Details with the ID : ${id}`,
            data: data
        })
    } catch {
        res.status(404).send({
            status: false,
            msg: 'Error in fetching the specific order Details.'
        })
    }
})

orderRouter.get('/order/:id', async (req, res) => {
    try {
        const id = req.params.id
        const data = await orderModel.find({ user: id });
        res.status(200).send({
            status: true,
            msg: `All the Order Details`,
            data: data
        })
    } catch {
        res.status(404).send({
            status: false,
            msg: 'Error in fetching the order Details.'
        })
    }
})

orderRouter.patch('/orders/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        await orderModel.findByIdAndUpdate({ _id: id }, data);
        res.status(200).send({
            status: true,
            msg: "Your Order has been Updated!"
        })
    } catch {
        res.status(404).send({
            status: false,
            msg: 'Error in Updating the Order.'
        })
    }
})

module.exports = { orderRouter }