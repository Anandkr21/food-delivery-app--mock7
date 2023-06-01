const mongoose = require('mongoose')

const orderShema = ({
    // user: { type: ObjectId, ref: 'User' },
    // restaurant: { type: ObjectId, ref: 'Restaurant' },
    items: [{
        name: String,
        price: Number,
        quantity: Number
    }],
    totalPrice: Number,
    deliveryAddress: {
        street: String,
        city: String,
        state: String,
        country: String,
        zip: String
    },
    status: String,// e.g, "placed", "preparing", "on the way", "delivered",
    enum: ["placed", "preparing", "on the way", "delivered"]
})

const orderModel = mongoose.model('order', orderShema)

module.exports = { orderModel }