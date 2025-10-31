import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

async function ConnectMongoose() {
    try{
      if(!MONGODB_URI){
        console.log("MONGODB_URI is not defined in environment variables");
      }
      await mongoose.connect(MONGODB_URI);
      console.log("MongoDB is Connected Successfully");
    }
    catch(err){
        console.error("MongoDB connection error:", err);
        throw err;
    }
}

export default ConnectMongoose;