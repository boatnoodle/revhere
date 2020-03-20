import User from "../models/User";
import CategoryReview from "../models/CategoryReview";

const resolver = {
  Query: {
    getCategoryReview: async () => {
      const categoryReview = await CategoryReview.find({});

      console.log(categoryReview, "xxx");
      return categoryReview;
    }
  }
};

export default resolver;
