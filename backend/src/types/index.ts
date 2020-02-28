import { mergeTypes } from "merge-graphql-schemas";
import userSchema from "./user";
import reviewSchema from "./review";

const types = [userSchema, reviewSchema];

export default mergeTypes(types, { all: true });
