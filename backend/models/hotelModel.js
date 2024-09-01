import mongoose from "mongoose";

const hotelSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'add the hotel name']
    },
    types: { // {appartment||resort||villa||etc}
        type: String,
        required: [true, 'add the type of hotel']
    },
    city: {
        type: String,
        required: [true, 'add the name of the city']
    },
    address: {
        type: String,
        required: [true, 'add the address']
    },
    distance: {
        type: Number,
        required: [true, 'enter the distance']
    },
    photos: {
        type: [String],
    },
    discription: {
        type: String,
        required: [true, 'enter the discription']
    },
    rating: {
        type: Number,
        reqired: [true, 'add the rating of hotel'],
        min: 0,
        max: 5
    },
    rooms: {
        type: [String]
    },
    cheapestPrice: {
        type: Number,
        required: [true, ['add the cheapest price']]
    },
    featured:{
        type:Boolean,
        default:false
    }
})
export default mongoose.model('Hotel',hotelSchema);