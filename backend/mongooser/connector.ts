import mongoose from "mongoose";
import { config } from "dotenv";
config();

const connectDb = async () => {
  const db = await mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });

  return db;
};

export const executeDb = async dbPromise => {
  await connectDb();
  console.log("Mongoose connected...");
  await dbPromise();
};
