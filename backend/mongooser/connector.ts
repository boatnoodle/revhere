import mongoose from "mongoose";
import connectDb from "../src/utils/connectDb";

export const executeDb = async dbPromise => {
  await connectDb();
  console.log("Mongoose connected...");
  await dbPromise();
};
