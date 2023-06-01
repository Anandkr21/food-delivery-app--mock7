const express = require('express')
const { connection } = require('./config/db')
const { userRouter } = require('./routes/userRouter')
const { restaurantRouter } = require('./routes/restaurantRouter')
const { orderRouter } = require('./routes/orderRouter')

require('dotenv').config()
const Port = process.env.port;

const app = express()
app.use(express.json())

app.get('/', async (req, res) => {
    res.send('Welcome To Food Delivery app')
})

app.use('/api', userRouter)
app.use('/api', restaurantRouter)
app.use('/api', orderRouter)


app.listen(Port, async () => {
    try {
        await connection;
        console.log('Connected to DB');
    } catch (error) {
        console.log('Something Error');
    }
    console.log(`Server is running at http://localhost:${Port}`);
})