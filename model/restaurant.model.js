const mongoose = require('mongoose');

const menuSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: String
}, {
    versionKey: false
})


const restaurantSchema = mongoose.Schema({
    name: String,
    address: {
        street: String,
        city: String,
        state: String,
        country: String,
        zip: String
    },
    menu: [menuSchema]
}, {
    versionKey: false
})



const RestaurantModel = mongoose.model('restaurants', restaurantSchema)

module.exports = { RestaurantModel };


// syntax of Adding restaurant in DB

// {
//     "name":"abc restaurant",
//     "address":{
//         "street": "gali",
//         "city": "hyd",
//         "staate": "TS",
//         "country": "IND",
//         "zip":"450008"
//     }
// }