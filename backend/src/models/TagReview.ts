import mongoose, { Schema, Document } from "mongoose";
import CategoryReview, { CategoryReviewDb } from "./CategoryReview";

export interface TagReviewDb extends Document {
  name: string;
  categoryReview: CategoryReviewDb;
}

const TagReviewSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    categoryReview: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CategoryReview"
    }
  },
  { timestamps: true }
);

const TagReview = mongoose.model<TagReviewDb>("TagReview", TagReviewSchema);

export default TagReview;
