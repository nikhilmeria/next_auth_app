import {useState} from "react";
import {useRouter} from "next/router";
import {getFirestore, doc, getDoc} from "firebase/firestore";
import GoogleButton from "react-google-button";
import {ToastContainer, toast} from "react-toastify";

import firebase_app from "../../firebase_config";
import sign_in_google from "../../components/auth/sign_google";
import {useAuthContext} from "../../context/authContext";
import profileStyles from "../../styles/Profile.module.css";

const db = getFirestore(firebase_app);

function Profile() {
 const router = useRouter();

 let docRef = null;
 const {user} = useAuthContext();
 const [formData, setFormData] = useState({});
 const [newUser, setNewUser] = useState(false);

 // fn to signin/register to google acc in firebase auth
 const handleSignIN = async (e) => {
  e.preventDefault();

  const {resp, error} = await sign_in_google();
  console.log("back from component");
  if (error) {
   return console.log(error);
   // display error message & ask to try again.
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

 // if usr signin's to google acc & provides other details than add them to 'users' db
 const handleSubmit = async (e) => {
  e.preventDefault();

  let response;

  // add user data to 'users' db in firestore via API
  try {
   response = await fetch("/api/userDB", {
    method: "POST",
    body: JSON.stringify({
     nm: formData.name,
     ph: formData.phnNo,
     adr: formData.address,
     user_id: user.uid,
    }),
    headers: {"Content-Type": "application/json"},
   });
   const {data} = await response.json();

   console.log("result in profile page : ", data);
  } catch (error) {
   console.error(error);
   toast.error("Something went wrong, try again !");
  } finally {
   console.log("resp from user DB in profile page : ", response);
   router.replace("/");
  }
 };

 // delete user auth acc if other details nt provided during registeration
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
   <h2> Login / Register </h2>
   {newUser && (
    <form className={profileStyles.form} onSubmit={handleSubmit}>
     <label className={profileStyles.formLabel} htmlFor="name">
      Name
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

     <label className={profileStyles.formLabel} htmlFor="phnNo">
      Phone No
     </label>
     <input
      className={profileStyles.formInput}
      type="number"
      id="phnNo"
      name="phnNo"
      onChange={handleChange}
      value={formData.phnNo}
      required
     />

     <label className={profileStyles.formLabel} htmlFor="address">
      Address
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
   )}
   {!newUser && (
    <GoogleButton
     className={profileStyles.goglBtn}
     type="dark"
     onClick={handleSignIN}
    />
   )}
   <h3 onClick={delUsrAcc}>Cancel</h3>
   <ToastContainer
    autoClose={1000}
    position="top-right"
    theme="colored"
    closeOnClick={true}
    pauseOnHover={true}
    hideProgressBar={false}
   />
   {!newUser && <p>शूरवीर, नई दिल्ली. &copy; २०२३</p>}
  </div>
 );
}

export default Profile;


//1. I am deleting a newly created user from firebase auth,
//   if other details are not entered and the user cancels from the page.