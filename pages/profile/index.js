import {useState} from "react";
import {useRouter} from "next/router";
import {getFirestore, doc, getDoc} from "firebase/firestore";
import {Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import GoogleButton from "react-google-button";

import firebase_app from "../../firebase_config";
import sign_in_google from "../../components/auth/sign_google";
import addUser2DB from "../../components/db/userData";

const db = getFirestore(firebase_app);

function Profile() {
 const router = useRouter();

 let docRef = null;
 let userId = null;
 const [name, setName] = useState("");
 const [phnNo, setPhnNO] = useState(0);
 const [address, setAddress] = useState("");
 const [newUser, setNewUser] = useState(false);

 const handleSignIN = async (e) => {
  e.preventDefault();

  const {resp, error} = await sign_in_google();
  console.log("back from component");
  if (error) {
   return console.log(error);
  }
  // else successful
  else {
   console.log(resp.user.uid);
   userId = resp.user.uid;
   docRef = doc(db, "users", resp.user.uid);
   const docSnap = await getDoc(docRef);
   if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    router.replace("/");
   } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    setNewUser(true);
   }
  }
 };

 const handleSubmit = async (e) => {
  e.preventDefault();

  // add user data to user db in firestore
  const dbResp = await addUser2DB("users", userId, {
   name: name,
   Phone_No: phnNo,
   Address: address,
  });
  console.log("resp from DB : ", dbResp);
  router.replace("/");
 };

 return (
  <div>
   <h2> Profile page </h2>
   {newUser && (
    <form onSubmit={handleSubmit}>
     <label>Enter Name : </label>
     <input type="text" onChange={(e) => setName(e.target.value)} />
     <label>Enter Phone No : </label>
     <input type="number" onChange={(e) => setPhnNO(e.target.value)} />
     <label>Enter Address : </label>
     <input type="text" onChange={(e) => setAddress(e.target.value)} />
     <Submit type="submit">Submit</Submit>
    </form>
   )}
   {!newUser && <GoogleButton type="dark" onClick={handleSignIN} />}
  </div>
 );
}

export default Profile;
