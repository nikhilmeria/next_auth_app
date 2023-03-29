import firebase_app from "../../firebase_config";
import {getFirestore, addDoc, Timestamp, collection} from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function serviceHandler(req, res) {
 const name = req.body.nm;
 const no = req.body.ph;
 const serv = req.body.myServ;
 const address = req.body.adr;
 const userId = req.body.user_id;

 if (req.method === "POST") {
  try {
   const docRef = await addDoc(collection(db, "services"), {
    userId: userId,
    name: name,
    phone_no: no,
    service_req: serv,
    address: address,
    date: Timestamp.fromDate(new Date()),
   });

   console.log("Document written with ID: ", docRef.id);
  } catch (err) {
   console.error("err in form api = ", err);
  }

  res.status(201).json({data: "Form processing by api"});
 }
}
