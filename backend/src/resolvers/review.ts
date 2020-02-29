import { ObjectId } from "bson";
import User from "../models/User";
import Review from "../models/Review";

const resolver = {
  Mutation: {
    createReview: async (_, arg, context) => {
      const { uid } = await context?.user;
      const userId = await User.findOne({ uid }).select("_id");
      const review = await Review.create({
        ...arg,
        user: userId,
        status: "draft"
      });

      return review;
    }
  }
};

export default resolver;
