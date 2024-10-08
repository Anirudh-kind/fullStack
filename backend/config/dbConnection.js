import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO)
        console.log(`Database connected: HOST->${connect.connection.host} NAME->${connect.connection.name}`.yellow)

        mongoose.connection.on('disconnected', () => console.log(`mongoDB dissconncted`.bgWhite))
        
    } catch (err) {
        console.log(`${err}`.bgRed)
        process.exit(1);
    }
}

