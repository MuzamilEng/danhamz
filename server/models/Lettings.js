const mongoose = require('mongoose');

const lettingsSchema = new mongoose.Schema({
    propertyName: String,
    pricePerWeek: String,
    pricePerMonth: String,
    info: String,
    availableDate: String,
    furnished: String,
    bills: String,
    bedrooms: String,
    bathrooms: String,
    reception: String,
    propertyImages: [],
    location: String,
    keyFeatures: [],
    lettingDetails: [],
    description: [
        {
            title: "",
            info: ""
        }
    ]
})

module.exports = mongoose.model('Letting', lettingsSchema)