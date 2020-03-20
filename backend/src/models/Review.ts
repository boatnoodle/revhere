import mongoose, { Schema, Document } from "mongoose";
import { UserSchemaDb } from "./User";
import { ReviewStatus } from "../../types/review";
import { TagReviewDb } from "./TagReview";
import { CategoryReviewDb } from "./CategoryReview";

export interface ReviewDb extends Document {
  categoryReview: CategoryReviewDb;
  titleReview: string;
  introReview: string;
  imageCover: string;
  user: UserSchemaDb;
  body: string;
  tags: TagReviewDb;
  status: ReviewStatus;
}

const ReviewSchema = new Schema(
  {
    categoryReview: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CategoryReview"
    },
    titleReview: {
      type: String
    },
    introReview: {
      type: String
    },
    imageCover: {
      type: String
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    body: {
      type: String
    },
    tags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TagReview"
      }
    ],
    status: {
      type: String,
      enum: [ReviewStatus.DRAFT, ReviewStatus.PUBLISH, ReviewStatus.REMOVE],
      default: ReviewStatus.DRAFT
    }
  },
  { timestamps: true }
);

const Review = mongoose.model<ReviewDb>("Review", ReviewSchema);

export default Review;
