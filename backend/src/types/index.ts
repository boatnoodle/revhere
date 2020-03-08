import { mergeTypes } from "merge-graphql-schemas";
import userSchema from "./user";
import reviewSchema from "./review";
import categoryReviewSchema from "./categoryReview";
import tagSchema from "./tag";
import metaDataSchema from "./metaData";

const types = [
  userSchema,
  reviewSchema,
  categoryReviewSchema,
  tagSchema,
  metaDataSchema
];

export default mergeTypes(types, { all: true });
