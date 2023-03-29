import firebase_app from "../../firebase_config";
import {getFirestore, doc, setDoc} from "firebase/firestore";

//THIS FILE IS NOT REQD

const db = getFirestore(firebase_app);

export default async function addUsrData(collection, id, data) {
 console.log("Inside addUsrData 1 : ", collection);
 console.log("Inside addUsrData 2 : ", id);
 console.log("Inside addUsrData 3 : ", data);

 let result = null;
 let error = null;

 try {
  console.log("Inside try : ");
  result = await setDoc(doc(db, collection, id), data, {
   merge: true,
  });
  console.log("result from try : ", result);
 } catch (e) {
  error = e;
 }

 return {result, error};
}
