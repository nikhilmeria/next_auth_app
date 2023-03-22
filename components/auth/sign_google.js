import firebase_app from "../../firebase_config";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";

import add2DB from "../db/userData";

export default async function signInGoogle() {
 let resp = null,
  error = null;

 const auth = getAuth(firebase_app);
 const provider = new GoogleAuthProvider();
 provider.setCustomParameters({
  prompt: "select_account",
 });

 try {
  resp = await signInWithPopup(auth, provider);
  // add user data to user db in firestore
  const dbResp = await add2DB("users", resp.user.uid, {
   name: resp.user.displayName,
  });
  console.log("resp from DB : ", dbResp);
 } catch (e) {
  error = e;
  console.error("Signup fn error : ", error);
 } finally {
  console.log("resp from google : ", resp);
  return {resp, error};
 }
}
