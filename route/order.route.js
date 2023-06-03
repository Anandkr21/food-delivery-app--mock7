const express = require('express');
const { OrderModel } = require('../model/order.model');
const { authentication } = require('../middleware/authentication.middleware');

const orderRoute = express.Router();

// Orders posting
orderRoute.post('/orders', authentication, async (req, res) => {
    try {
        const { user, restaurant, items, totalPrice, deliveryAddress, status } = req.body;
        const newOrder = new OrderModel({ user, restaurant, items, totalPrice, deliveryAddress, status });
        await newOrder.save()
        res.status(201).send({
            status: true,
            msg: "Your Order has been Placed.",
            data: newOrder
        })
    } catch {
        res.status(404).send({
            status: false,
            msg: 'Error in placing the Order.'
        })
    }
})
// getting orders by id
orderRoute.get('/orders/:id', authentication, async (req, res) => {
    try {
        const id = req.params.id
        const data = await OrderModel.find({ _id: id });
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

// getting all order
orderRoute.get('/orders', authentication, async (req, res) => {
    try {
        const id = req.params.id
        const data = await OrderModel.find({ user: id });
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

// updating orders by their id
orderRoute.patch('/orders/:id', authentication, async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        await OrderModel.findByIdAndUpdate({ _id: id }, data);
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

module.exports = { orderRoute };

