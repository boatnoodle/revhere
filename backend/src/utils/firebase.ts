import * as admin from "firebase-admin";

const serviceAccount = require("../config/serviceAccountKey.json");

export const firebaseAdmin = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://revhere-51751.firebaseio.com"
});
