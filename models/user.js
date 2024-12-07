const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
    // role:{
    //     type: String,
    // },
    cart: [{
        id:{
            type: Schema.Types.ObjectId,
            required: true,
            ref:"products"
        },
        quantity: Number
    }]
})

module.exports = mongoose.model('users', userSchema);
let users = [
    {
        "name": "Pratik",
        "email": "pratik@gmail.com",
        "password": "147258",
        "cart": []
    },
    {
        "name": "Aman",
        "email": "Aman@gmail.com",
        "password": "258369",
        "cart": []
    },
    {
        "name": "Sonu",
        "email": "sonu@gmail.com",
        "password": "369147",
        "cart": []
    }
]