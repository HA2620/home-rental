const mongoose = require('mongoose')
const propertySchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    seller: {
        name: String,
        email: String,
    },
    neighbourhood: [{
        name: String,
        type: String,
        distance: Number
    }],
    type: String,
    noOfRoom: Number,
    noOfWashroom: Number,
    picUrl: String,
    location: String
})

const PropertyModel = mongoose.model('Property', propertySchema)
module.exports = PropertyModel