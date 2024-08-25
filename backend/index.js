import 'dotenv/config';
import express from 'express';
import colors from 'colors'
import {connectDb} from './config/dbConnection.js'

const app = express();
const port = process.env.PORT || 1000;


app.listen(port, () => {
    console.log(`server running on port: ${port}`.bgBlue);
    connectDb();

});
