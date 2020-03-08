import mongoose, { Schema, Document } from "mongoose";
import { TagReviewDb } from "./TagReview";

export interface CategoryReviewDb extends Document {
  name: string;
  tags: [TagReviewDb];
}

const CategoryReviewSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    tags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TagReview"
      }
    ]
  },
  { timestamps: true }
);

const CategoryReview = mongoose.model<CategoryReviewDb>(
  "CategoryReview",
  CategoryReviewSchema
);

export default CategoryReview;
