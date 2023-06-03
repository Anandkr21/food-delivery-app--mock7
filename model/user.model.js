const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    address: {
        street: String,
        city: String,
        state: String,
        country: String,
        zip: String
    }
}, {
    versionKey: false
})

const UserModel = mongoose.model('users', userSchema);

module.exports = { UserModel }

// {
//     "name":"anand",
//     "email":"anand@gmail.com",
//     "password":"anand",
//     "address":{
//       "street":"abc",
//       "city":"cpr",
//       "state":"BR",
//       "country":"IND",
//       "zip":"841301"
//     }
//   }