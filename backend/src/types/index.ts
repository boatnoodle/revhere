import { mergeTypes } from "merge-graphql-schemas";
import GraphqlDate from "./Date";
import UserSchema from "./user";
import ReviewSchema from "./review";
import CategoryReviewSchema from "./categoryReview";
import TagSchema from "./tag";
import MetaDataSchema from "./metaData";
import ContactUsSchema from "./contactUs";

const types = [
  GraphqlDate,
  UserSchema,
  ReviewSchema,
  CategoryReviewSchema,
  TagSchema,
  MetaDataSchema,
  ContactUsSchema
];

export default mergeTypes(types, { all: true });
