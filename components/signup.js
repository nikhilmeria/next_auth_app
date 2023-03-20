import firebase_app from "../firebase_config";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signUp(email, password) {
 let result = null,
  error = null;
 try {
  result = await createUserWithEmailAndPassword(auth, email, password);
  console.log("Signup : ", result);
 } catch (e) {
  error = e;
  console.error("Signup error : ", error);
 }

 return {result, error};
}
