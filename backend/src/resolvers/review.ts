import { ObjectId } from "bson";
import User from "../models/User";
import Review from "../models/Review";

const resolver = {
  Mutation: {
    createReview: async (_, arg, context) => {
      const { uid } = await context?.user;
      const userId = await User.find({ uid }).select("_id");
      console.log(userId, "xx");
      const review = await Review.create({
        user: ObjectId(userId),
        status: "draft",
        ...arg
      });

      return review;
    }
  }
};

export default resolver;
