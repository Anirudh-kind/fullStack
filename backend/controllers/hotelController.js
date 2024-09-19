import Hotel from '../models/hotelModel.js';

/**
 * Creates a new hotel based on the request body and saves it to the database.
 * @param {Object} req - The request object, containing the hotel data in req.body.
 * @param {Object} res - The response object, used to send the response back to the client.
 * @param {Function} next - The next middleware function in the stack.
 * @returns {Promise<void>} - A promise that resolves to void. The response will be sent directly to the client.
 */
const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body);
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(`new hotel created as: ${savedHotel}`);
    } catch (err) {
        next(err);
    }
}

/**
 * Retrieves all hotels from the database. 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object, used to send the list of hotels to the client.
 * @param {Function} next - The next middleware function in the stack.
 * @returns {Promise<void>} - A promise that resolves to void. The response will be sent directly to the client.
 */
const getAllHotel = async (req, res, next) => {
    try {
        const allHotel = await Hotel.find();
        res.status(200).json(allHotel);
    } catch (err) {
        next(err);
    }
}

/**
 * Updates an existing hotel based on the provided ID and request body.
 * @param {Object} req - The request object, containing the hotel ID in req.params.id and update data in req.body.
 * @param {Object} res - The response object, used to send the result of the update operation to the client.
 * @param {Function} next - The next middleware function in the stack.
 * @returns {Promise<void>} - A promise that resolves to void. The response will be sent directly to the client.
 */
const updateHotel = async (req, res, next) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(`hotel updated as: ${updatedHotel}`);
    } catch (err) {
        next(err);
    }
}

/**
 * Deletes a hotel based on the provided ID.
 * @param {Object} req - The request object, containing the hotel ID in req.params.id.
 * @param {Object} res - The response object, used to send the result of the delete operation to the client.
 * @param {Function} next - The next middleware function in the stack.
 * @returns {Promise<void>} - A promise that resolves to void. The response will be sent directly to the client.
 */
const deleteHotel = async (req, res, next) => {
    try {
        const deletedHotel = await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json(`hotel deleted: ${deletedHotel}`);
    } catch (err) {
        next(err);
    }
}

/**
 * Retrieves a single hotel based on the provided ID.
 * @param {Object} req - The request object, containing the hotel ID in req.params.id.
 * @param {Object} res - The response object, used to send the retrieved hotel data to the client.
 * @param {Function} next - The next middleware function in the stack.
 * @returns {Promise<void>} - A promise that resolves to void. The response will be sent directly to the client.
 */
const getHotel = async (req, res, next) => {
    try {
        const getHotel = await Hotel.findById(req.params.id);
        res.status(200).json(getHotel);
    } catch (err) {
        next(err);
    }
}

export { createHotel, getAllHotel, updateHotel, getHotel, deleteHotel }