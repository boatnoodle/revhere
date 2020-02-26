import mongoose, { Schema, Document } from "mongoose";
import { UserSchemaDb } from "./User";

export interface ReviewDb extends Document {
  titleReview: string;
  introReview: string;
  imageCover: string;
  user: UserSchemaDb;
}

const ReviewSchema = new Schema(
  {
    titleReview: {
      type: String,
      required: true
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
    }
  },
  { timestamps: true }
);

const Review = mongoose.model<ReviewDb>("Review", ReviewSchema);

export default Review;
