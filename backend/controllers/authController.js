import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import 'dotenv/config';

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      isAdmin: req.body.isAdmin
    })
    await newUser.save();
    res.status(200).send('user has been created');

  } catch (error) {
    console.log('error occured at authController.js'.bgRed)
    next(error)
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username })

    if (!user) {
      console.log(`user not found`.bgRed)
      return next(createError(404, 'user not found'))
    }

    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
    if (!isPasswordCorrect) {
      console.log(`password is incorrect`.bgRed)
      return next(createError(400, 'password is incorrect'))
    }
    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT)

    res.cookie("access_token", token, { httpOnly: true }).status(200).send('user is loged in')

  } catch (error) {
    console.log(`error inside login function`.bgRed)
    next(error)
  }
}