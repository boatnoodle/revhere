import * as admin from "firebase-admin";

const serviceAccount = require("../config/serviceAccountKey.json");

const firebaseAdmin = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://revhere-1b66c.firebaseio.com",
  storageBucket: "revhere-1b66c.appspot.com"
});

export default firebaseAdmin;
