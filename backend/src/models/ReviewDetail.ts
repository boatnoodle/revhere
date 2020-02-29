import mongoose, { Schema, Document } from "mongoose";
import { ReviewDb } from "./Review";

enum SECTION_TYPE {
  MAIN_TITLE = "mainTitle",
  SUB_TITLE = "subTitle",
  CONTENT = "content",
  IMAGE = "image"
}

export interface ReviewDetailDb extends Document {
  sectionType: SECTION_TYPE;
  body: string;
  order: number;
  review: ReviewDb;
}

const ReviewDetailSchema = new Schema(
  {
    sectionType: {
      type: String,
      enum: [
        SECTION_TYPE.MAIN_TITLE,
        SECTION_TYPE.SUB_TITLE,
        SECTION_TYPE.CONTENT,
        SECTION_TYPE.IMAGE
      ],
      required: true
    },
    body: {
      type: String,
      required: true
    },
    order: {
      type: Number,
      required: true
    },
    review: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review"
    }
  },
  { timestamps: true }
);

const ReviewDetail = mongoose.model<ReviewDetailDb>(
  "ReviewDetail",
  ReviewDetailSchema
);

export default ReviewDetail;
