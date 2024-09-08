import express from "express";
import Hotel from '../models/hotelModel.js';

const router = express.Router();

// Create a new hotel
router.post('/', async (req, res) => {
    const newHotel = new Hotel(req.body);
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(`new hotel created as: ${savedHotel}`);
    } catch (err) {
        next(err);
    }
});

// update
router.put('/:id', async (req, res) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body })
        res.status(200).json(` hotel updated as: ${updatedHotel}`);
    } catch (err) {
        next(err);
    }
});

//delete
router.delete('/:id', async (req, res) => {
    try {
        const deletedHotel = await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json(` hotel deleted: ${deletedHotel}`);
    } catch (err) {
        next(err);
    }
})

//get specific hotel
router.get('/:id', async (req, res) => {
    try {
        const getHotel = await Hotel.findById(req.params.id)
        res.status(200).json(getHotel);
    } catch (err) {
        next(err);
    }
})

// get all hotels
router.get('/', async (req, res) => {
    try {
        const allHotel = await Hotel.find();
        res.status(200).json(allHotel)
    } catch (err) {
        next(err);
    }
})


export default router;