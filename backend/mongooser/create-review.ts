import { executeDb } from "./connector";
import Review from "../src/models/review";
import { ObjectId } from "bson";
/**
 * use ts-node at the root so it reads correct .env
 * Example,
 * ts-node  backend/batch/example-query.ts
 * you better copy this file and rename and put it adjacent to this file.
 */
const toExecute = async () => {
  const rawDocuments = {
    introReview: "Intro review test na ja yos na ja",
    titleReview: "Review by cto nat na ja",
    status: "draft",
    categoryReview: new ObjectId("5e722a055759400e5e613315"),
    imageCover:
      "https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.0-0/p640x640/57426210_2152690504811248_727909996469157888_o.jpg?_nc_cat=111&_nc_sid=dd9801&_nc_ohc=bBTq9L8qsykAX9Dr5sw&_nc_ht=scontent.fbkk5-3.fna&_nc_tp=6&oh=97e8a95bc90f829d67aca45571f8dd61&oe=5E9D4957",
    user: new ObjectId("5e5a0a73ab2464a17b07f86c"),
    body: "Review from seed naja"
  };

  for (let i = 0; i <= 20; i++) {
    Review.create(rawDocuments)
      .then(function(docs) {
        console.log(`Review created successfully ${i} `);
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};

executeDb(toExecute);
