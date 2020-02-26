import mongoose from "mongoose";

export default async () => {
  const url =
    process.env.NODE_ENV === "production"
      ? process.env.DB_URL
      : process.env.DB_URL_DEV;

  const db = await mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });

  return db;
};
