import User from "../models/User";
import Review from "../models/Review";

import { bucket } from "../utils/firebase";
import { ObjectId } from "bson";

const upload = (file, uid) => {
  const { createReadStream, mimetype } = file;
  const newFileName = `review-detail/${Date.now()}`;

  return new Promise((resolve, reject) => {
    createReadStream()
      .pipe(
        bucket.file(newFileName).createWriteStream({
          resumable: false,
          gzip: true,
          contentType: mimetype,
          public: true
        })
      )
      .on("error", reject)
      .on(
        "finish",
        resolve(
          `https://firebasestorage.googleapis.com/v0/b/${
            bucket.name
          }/o/${encodeURIComponent(newFileName)}?alt=media&token=${uid}`
        )
      );
  });
};

const resolver = {
  Query: {
    getReview: async (_, { _id }, context) => {
      const review = await Review.findById(_id);
      return review;
    }
  },
  Mutation: {
    createReview: async (_, args, context) => {
      const { uid } = await context?.user;
      const userId = await User.findOne({ uid }).select("_id");
      const file = await args.imageCover;
      const downloadUrl = await upload(file, uid);

      const review = await Review.create({
        ...args,
        user: userId,
        status: "draft",
        imageCover: downloadUrl
      });

      return review;
    },
    updateReviewDetail: async (_, { _id, body }, context) => {
      const review = await Review.findOneAndUpdate(
        { _id },
        { $set: { body } },
        { new: true }
      );
      return review;
    }
  }
};

export default resolver;
