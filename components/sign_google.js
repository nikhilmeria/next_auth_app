import firebase_app from "../firebase_config";
import {
 getAuth,
 GoogleAuthProvider,
 signInWithPopup,
 signOut,
 onAuthStateChanged,
} from "firebase/auth";

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
 } catch (e) {
  error = e;
  console.error("Signup fn error : ", error);
 } finally {
  console.log("resp from google : ", resp);
  return {resp, error};
 }
}
