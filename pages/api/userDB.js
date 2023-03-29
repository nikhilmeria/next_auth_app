import firebase_app from "../../firebase_config";
import {getFirestore, doc, setDoc, Timestamp} from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function userHandler(req, res) {
 console.log("Inside userHandler fn  userDb api : ");
 let result;
 const name = req.body.nm;
 const no = req.body.ph;
 const address = req.body.adr;
 const userId = req.body.user_id;

 if (req.method === "POST") {
  try {
   console.log("Inside try userDb api : ");
   result = await setDoc(
    doc(db, "users", userId),
    {
     name: name,
     phone_no: no,
     address: address,
     date: Timestamp.fromDate(new Date()),
    },
    {
     merge: true,
    }
   );
   console.log("Document written to userDB by api: ", result);
  } catch (e) {
   console.error("err in userDB api = ", e);
  }

  res.status(201).json({data: "user addded to DB by api"});
 }
}
