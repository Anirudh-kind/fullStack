import express from "express";
import Hotel from '../models/hotelModel.js'

const router = express.Router();

//create
router.post('./:id?limit=5', async () => {
    const newHotel = new Hotel(req.body)
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
        console.log('edfhnsughnrdsihn'.bgMagenta)
    } catch {
        res.status(500).json(err.bgRed)
    }
})

export default router
