export interface Review {
  _id: string;
  titleReview: string;
  introReview: string;
  imageCover: string;
  body: string;
  status: string;
}
export interface NewReview {
  titleReview: string;
  introReview: string;
  imageCover: string;
  reviewCategory: string;
  tags: string[];
}
