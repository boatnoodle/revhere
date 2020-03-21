export interface Review {
  _id: string;
  titleReview: string;
  introReview: string;
  imageCover: string;
  body: string;
  categoryReview: {
    _id: string;
    name: string;
  };
  tags: {
    _id: string;
    name: string;
  };
  user: {
    _id: string;
    name: string;
    email: string;
    photoURL: string;
    role: string;
  };
  status: string;
  created: Date;
  updated: Date;
}
export interface NewReview {
  titleReview: string;
  introReview: string;
  imageCover: string;
  reviewCategory: string;
  tags: string[];
}
