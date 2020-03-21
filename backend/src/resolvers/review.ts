import User from "../models/User";
import Review from "../models/Review";

import { bucket } from "../utils/firebase";
import { ObjectId } from "bson";
import { ReviewStatus } from "../../types/review";

const upload = (file, path) => {
  const { createReadStream, mimetype } = file;
  const newFileName = `${path}/${Date.now()}`;

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
      .on("finish", () => {
        const url = newFileName; //image url from firebase server
        resolve(url);
      });
  });
};

const resolver = {
  Query: {
    getMyReview: async (_, __, context) => {
      const { uid } = await context?.user;
      const userId = await User.findOne({ uid }).select("_id");

      const reviews = await Review.find({ user: userId });

      return reviews;
    },
    getReview: async (_, { _id }, context) => {
      const review = await Review.findById(_id).populate("categoryReview");
      return review;
    },
    getReviews: async (_, { status = "PUBLISH", page, perPage = 10 }) => {
      const reviews = await Review.find({ status: ReviewStatus[status] })
        .populate("categoryReview")
        .skip(page * perPage)
        .limit(perPage)
        .sort("-updatedAt");

      return reviews;
    },
    getReviewsMeta: async (_, { status = "PUBLISH" }) => {
      const countQuery = await Review.where({
        status: ReviewStatus[status]
      }).countDocuments();

      return { count: countQuery };
    }
  },
  Mutation: {
    createReview: async (_, args, context) => {
      const { status = "DRAFT", ...rest } = args?.payload;
      const { uid } = await context?.user;
      const userId = await User.findOne({ uid }).select("_id");

      const review = await Review.create({
        ...rest,
        user: userId,
        status: ReviewStatus[status]
      });

      return review;
    },
    updateReview: async (_, args, context) => {
      const {
        _id,
        titleReview,
        introReview,
        body,
        imageCover,
        categoryReview,
        tags
      } = args?.payload;
      const review = await Review.findOneAndUpdate(
        { _id },
        {
          $set: {
            titleReview,
            introReview,
            body,
            imageCover,
            categoryReview,
            tags
          }
        },
        { new: true }
      );

      return review;
    },
    uploadImageReview: async (_, { file: imageReviewDetail, path }) => {
      const file = await imageReviewDetail;
      const urlImage = await upload(file, path);

      return { urlImage };
    }
  }
};

export default resolver;
