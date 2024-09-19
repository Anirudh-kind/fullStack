import express from "express";
import { createHotel, getAllHotel, updateHotel, getHotel, deleteHotel } from '../controllers/hotelController.js'
const router = express.Router();

// Create a new hotel
router.post('/', createHotel);

// update
router.put('/:id', updateHotel);

//delete
router.delete('/:id', deleteHotel)

//get specific hotel
router.get('/:id', getHotel)

// get all hotels
router.get('/', getAllHotel)

export default router;