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

export default async function serviceHandler(req, res) {
 const timestamp = admin.firestore.FieldValue.serverTimestamp(); 

 const name = req.body.nm;
 const no = req.body.ph;
 const serv = req.body.myServ;
 const address = req.body.adr;
 const userId = req.body.user_id;

 console.log("id : ", req.body.user_id);
 console.log("name  : ", req.body.nm);
 console.log("service  : ", req.body.myServ);
 console.log("phone  : ", req.body.ph);
 console.log("address  : ", req.body.adr);

 if (req.method === "POST") {
  const db = admin.firestore();
  const collectionRef = db.collection("services");
  try {
   const docRef = await collectionRef.add({
    userId: userId,
    name: name,
    phone_no: no,
    service_req: serv,
    address: address,
    date: timestamp,
   });
   console.log("Document written with ID:", docRef.id);
   res.status(201).json({data: "Form processing by api"});
  } catch (error) {
   console.error("Error adding document:", error);
   res.status(500).json({data: "Error in Form processing by api"});
  }
 }
}
