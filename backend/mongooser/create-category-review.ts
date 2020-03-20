import { executeDb } from "./connector";
import CategoryReview from "../src/models/CategoryReview";
/**
 * use ts-node at the root so it reads correct .env
 * Example,
 * ts-node  backend/batch/example-query.ts
 * you better copy this file and rename and put it adjacent to this file.
 */
const toExecute = async () => {
  const rawDocuments = [
    {
      name: "หนังสือ",
      tags: null
    },
    {
      name: "ภาพยนต์",
      tags: null
    },
    {
      name: "ดนตรี",
      tags: null
    },
    {
      name: "คอร์ส",
      tags: null
    },
    {
      name: "สถานที่",
      tags: null
    },
    {
      name: "อื่นๆ",
      tags: null
    }
  ];

  CategoryReview.insertMany(rawDocuments)
    .then(function(docs) {
      console.log(`${docs.length} category reviews were successfully stored.`);
    })
    .catch(function(err) {
      console.log(err);
    });
};

executeDb(toExecute);
