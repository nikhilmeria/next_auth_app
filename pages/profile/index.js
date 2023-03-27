import {useState} from "react";
import {useRouter} from "next/router";
import {getFirestore, doc, getDoc} from "firebase/firestore";
import GoogleButton from "react-google-button";

import firebase_app from "../../firebase_config";
import sign_in_google from "../../components/auth/sign_google";
import addUser2DB from "../../components/db/userData";
import {useAuthContext} from "../../context/authContext";
import profileStyles from "../../styles/Profile.module.css";


const db = getFirestore(firebase_app);

function Profile() {
 const router = useRouter();

 let docRef = null;
 let userId = null;
 const {user} = useAuthContext();
 //  const [name, setName] = useState("");
 //  const [phnNo, setPhnNO] = useState(0);
 //  const [address, setAddress] = useState("");
 const [formData, setFormData] = useState({});
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

   docRef = doc(db, "users", resp.user.uid);
   const docSnap = await getDoc(docRef);
   if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    router.replace({
     pathname: "/",
    });
   } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    setNewUser(true);
   }
  }
 };

 const handleChange = (event) => {
  setFormData({
   ...formData,
   [event.target.name]: event.target.value,
  });
 };

 const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("resp from DB 1 : ", formData);

  // add user data to users db in firestore
  //   const dbResp = await addUser2DB("users", user.uid, {
  //    user_name: name,
  //    Phone_No: phnNo,
  //    Address: address,
  //   });
  //   console.log("resp from DB : ", dbResp);
  //   router.replace("/");
 };

 const delUsrAcc = async () => {
  if (user) {
   await user.delete(); // 1
   router.replace("/");
  } else {
   router.replace("/");
  }
 };

 return (
  <div className={profileStyles.main}>
   <h2> Profile page </h2>
   {newUser && (
    <form className={profileStyles.form} onSubmit={handleSubmit}>
     <label className={profileStyles.formLabel} htmlFor="name">
      Name:
     </label>
     <input
      className={profileStyles.formInput}
      type="text"
      id="name"
      name="name"
      onChange={handleChange}
      value={formData.name || ""}
      required
     />

     <label className={profileStyles.formLabel} htmlFor="email">
      Phone No:
     </label>
     <input
      className={profileStyles.formInput}
      type="number"
      id="phnNo"
      name="phnNo"
      onChange={handleChange}
      value={formData.phnNo || undefined}
      required
     />

     <label className={profileStyles.formLabel} htmlFor="email">
      Address:
     </label>
     <input
      className={profileStyles.formInput}
      type="text"
      id="address"
      name="address"
      onChange={handleChange}
      value={formData.address || ""}
      required
     />

     <button className={profileStyles.formButton} type="submit">
      Submit
     </button>
    </form>
    // <form onSubmit={handleSubmit}>
    //  <label>Enter Name : </label>
    //  <input type="text" onChange={(e) => setName(e.target.value)} />
    //  <label>Enter Phone No : </label>
    //  <input type="number" onChange={(e) => setPhnNO(e.target.value)} />
    //  <label>Enter Address : </label>
    //  <input type="text" onChange={(e) => setAddress(e.target.value)} />
    //  <button type="submit">Submit</button>
    // </form>
   )}
   {!newUser && (
    <GoogleButton
     className={profileStyles.goglBtn}
     type="dark"
     onClick={handleSignIN}
    />
   )}
   <h4 onClick={delUsrAcc}>Cancel</h4>
  </div>
 );
}

export default Profile;


//1. I am deleting a newly created user from firebase auth,
//   if other details are not entered and the user cancels from the page.