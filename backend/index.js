import 'dotenv/config';
import express from 'express';
import colors from 'colors'
import { connectDb } from './config/dbConnection.js'
import AuthRouter from './routes/auth.js'
import HotelsRouter from './routes/hotels.js'
import RoomsRouter from './routes/rooms.js'
import UsersRoute from './routes/users.js'
import ErrorHandler from './utils/error.js';
import cookieParser from 'cookie-parser';

const app = express();
const port = process.env.PORT || 1000;
connectDb();

// middlewares
app.use(cookieParser())
app.use(express.json()) //middleware used to parse incoming requests with JSON payloads. When a client sends data to the server in JSON format (e.g., in the body of a POST request), this middleware processes that data and makes it available on req.body within your route handlers.

app.use('/api/auth', AuthRouter)
app.use('/api/hotels', HotelsRouter)
app.use('/api/rooms', RoomsRouter)
app.use('/api/users', UsersRoute)

//we are calling a middleware named error handler, to use middleWare we write 'use' like 'app.use'
app.use(ErrorHandler);

app.listen(port, () => {
    console.log(`server running on port: ${port}`.bgBlue);
});