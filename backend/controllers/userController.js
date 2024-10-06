import User from '../models/userModel.js'

/**
 * Retrieves a single User based on the provided ID.
 * @param {Object} req - The request object, containing the User ID in req.params.id.
 * @param {Object} res - The response object, used to send the retrieved User data to the client.
 * @param {Function} next - The next middleware function in the stack.
 * @returns {Promise<void>} - A promise that resolves to void. The response will be sent directly to the client.
 */
const getUser = async (req, res, next) => {
  try {
    const getUser = await User.findById(req.params.id);
    res.status(200).json(getUser);
  } catch (err) {
    next(err);
  }
}

/**
 * Retrieves all Users from the database. 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object, used to send the list of Users to the client.
 * @param {Function} next - The next middleware function in the stack.
 * @returns {Promise<void>} - A promise that resolves to void. The response will be sent directly to the client.
 */
const getAllUser = async (req, res, next) => {
  try {
    const allUser = await User.find();
    res.status(200).json(allUser);
  } catch (err) {
    next(err);
  }
}

/**
 * Updates an existing User based on the provided ID and request body.
 * @param {Object} req - The request object, containing the User ID in req.params.id and update data in req.body.
 * @param {Object} res - The response object, used to send the result of the update operation to the client.
 * @param {Function} next - The next middleware function in the stack.
 * @returns {Promise<void>} - A promise that resolves to void. The response will be sent directly to the client.
 */
const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.status(200).json(`User updated as: ${updatedUser}`);
  } catch (err) {
    next(err);
  }
}

/**
 * Deletes a User based on the provided ID.
 * @param {Object} req - The request object, containing the User ID in req.params.id.
 * @param {Object} res - The response object, used to send the result of the delete operation to the client.
 * @param {Function} next - The next middleware function in the stack.
 * @returns {Promise<void>} - A promise that resolves to void. The response will be sent directly to the client.
 */
const deleteUser = async (req, res, next) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).json(`User deleted: ${deletedUser}`);
  } catch (err) {
    next(err);
  }
}

export { getAllUser, updateUser, getUser, deleteUser }