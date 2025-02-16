import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/train_booking", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`MongoDB Connection Failed: ${error.message}`);
        process.exit(1); // Stop the server if connection fails
    }
};

export default connectDB;

