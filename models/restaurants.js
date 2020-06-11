const {Schema, model} = require('mongoose')

const restaurantSchema = new Schema({
  restaurant: {
    cuisines: String,
    name: String,
    thumb: String,
    url: String,
    location: {
      address: String,
      locality: String,
      city: String,
      zipcode: Number,
    },
  }
})

const Restaurant = model('restaurant', restaurantSchema)

module.exports = Restaurant