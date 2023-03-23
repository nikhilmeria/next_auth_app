import firebase_app from "../../firebase_config";
import {getFirestore, collection, addDoc} from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function formHandler(req, res) {
 const name = req.body.name;
 const no = req.body.no;
 const serv = req.body.serv;
 const address = req.body.address;

 if (req.method === "POST") {
  try {
   const docRef = await addDoc(collection(db, "services"), {
    name: name,
    phone_no: no,
    service_req: serv,
    address: address,
   });
   console.log("Document written with ID: ", docRef.id);
  } catch (err) {
   console.error("err in form api = ", err);
  }
  //   console.log("body1: ", req.body.name);
  //   console.log("body2: ", req.body.no);
  //   console.log("body3: ", req.body.serv);
  //   console.log("body3: ", req.body.address);

  res.status(201).json({data: "Form processing by api"});
 }
}
