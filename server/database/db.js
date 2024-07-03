import mongoose from "mongoose";

const dbConnection = () => {

    console.log("MongoDb", process.env.MONGODB);
    try {
        mongoose.connect(process.env.MONGODB)
        .then(() => {
            console.log("Database is connected.");
        })
        .catch((e) => {
            console.log("Error connecting to the database",e)
        })
    } catch (error) {
        console.log("Unexpected error", error);
    }
}

export default dbConnection;