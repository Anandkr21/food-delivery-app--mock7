require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connection } = require('./configs/connection');
const { userRoute } = require('./route/user.route');
const { restaurantRouter } = require('./route/restaurant.route');
const { orderRoute } = require('./route/order.route');

const PORT = process.env.port || 8080;


const app = express();
app.use(express.json());
app.use(cors());


app.get('/', async (req, res) => {
    res.send('Welcome To Food Delivery app')
})

app.use('/api', userRoute);
app.use('/api', restaurantRouter);
app.use('/api', orderRoute);

app.listen(PORT, async () => {
    try {
        await connection;
        console.log('Server is connected to the Database');
    } catch {
        console.log('Server could not connect to the Database.')
    }
    console.log(`Server is running at the port : ${PORT}`);
})