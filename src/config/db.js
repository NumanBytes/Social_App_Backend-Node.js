import mongoose from "mongoose";

const connectDB = async () => {
  const uri = 'mongodb://127.0.0.1:27017/Social-Backend';
  try {
    await mongoose
    .connect(uri, {
      autoCreate: true,
      autoIndex: true,
      useNewUrlParser: true,
      // useUnifiedToplogy: true,
    })
    .then((res) => {
      console.log("Connected db connection");
    })
  }
    catch(error){
      console.log("Error connecting db connection", error.message);
    }
};

export default connectDB;
