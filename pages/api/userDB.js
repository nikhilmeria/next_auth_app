import admin from "firebase-admin";

const serviceAccount = {
 projectId: process.env.FIREBASE_PROJECT_ID,
 clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
 privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
};

if (!admin.apps.length) {
 admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
 });
}

export default async function userHandler(req, res) {
 const timestamp = admin.firestore.Timestamp.now();

 const name = req.body.nm;
 const no = req.body.ph;
 const address = req.body.adr;
 const userId = req.body.user_id;

 if (req.method === "POST") {
  const db = admin.firestore();
  const collectionRef = db.collection("users");

  try {
   await collectionRef.doc(userId).set({
    name: name,
    phone_no: no,
    address: address,
    date: timestamp,
   });

   console.log("Document written with ID:", userId);
   res.status(201).json({data: "User Added by api"});
  } catch (error) {
   console.error("Error adding document:", error);
   res.status(500).json({data: "Error in adding user by api"});
  }
 }
}
