import express from "express";
import Hotel from '../models/hotelModel.js';

const router = express.Router();

// Create a new hotel
router.post('/', async (req, res) => {
    const newHotel = new Hotel(req.body); 
    
    console.log(JSON.stringify(newHotel).blue);

    try {
        console.log("Started post API".blue);

        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);

        console.log('Hotel saved successfully'.bgMagenta);
    } catch (err) { 
        console.log(err.message.bgRed);
        res.status(500).json({ error: err.message });
    }
});

export default router;
