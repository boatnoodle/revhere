import User from "../models/User";
import CategoryReview from "../models/CategoryReview";

const resolver = {
  Query: {
    getCategoryReview: async () => {
      const categoryReview = await CategoryReview.find({});

      return categoryReview;
    }
  }
};

export default resolver;
