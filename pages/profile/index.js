import {useRef, useState} from "react";
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
 const phoneInputRef = useRef(null);

 let docRef = null;
 let phoneValue = null;
 const {user} = useAuthContext();
 const [formData, setFormData] = useState({});
 const [phNo, setPhNo] = useState();
 const [newUser, setNewUser] = useState(false);

 // fn to signin/register to google acc in firebase auth
 const handleSignIN = async () => {
  //e.preventDefault();

  const {resp, error} = await sign_in_google();
  //console.log("back from component");
  if (error) {
   alert("Something went wrong, try again !");
   return; //console.log(error);
  }
  // else successful
  else {
   try {
    //console.log(resp.user.uid);

    docRef = doc(db, "users", resp.user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
     // console.log("Document data:", docSnap.data());
     router.replace({
      pathname: "/",
     });
    } else {
     // doc.data() will be undefined in this case
     //  console.log("No such document!");
     setNewUser(true);
    }
   } catch (error) {
    alert("Something went wrong, try again !");
    return; //console.log(error);
   }
  }
 };

 const handleChange = (event) => {
  setFormData({
   ...formData,
   [event.target.name]: event.target.value,
  });
 };

 const handlePhoneChange = (event) => {
  phoneValue = event.target.value;
  const regex = /^[6-9]\d{9}$/; // Regular expression for Indian phone numbers
  //console.log(regex.test(phoneValue));
  if (!regex.test(phoneValue)) {
   phoneInputRef.current.setCustomValidity(
    "Please enter a valid Indian phone number"
   );
  } else {
   phoneInputRef.current.setCustomValidity("");
   //console.log("phone : ", phoneValue);
   setPhNo(phoneValue);
  }
 };

 // if usr signin's to google acc & provides other details than add them to 'users' db
 const handleSubmit = async (e) => {
  e.preventDefault();

  let response;

  // add user data to 'users' db in firestore via API
  try {
   //console.log("phone value in phNO : ", phNo);
   response = await fetch("/api/userDB", {
    method: "POST",
    body: JSON.stringify({
     nm: formData.name,
     ph: phNo,
     adr: formData.address,
     user_id: user.uid,
    }),
    headers: {"Content-Type": "application/json"},
   });
   const {data} = await response.json();

   //console.log("result in profile page : ", data);
  } catch (error) {
   alert("Something went wrong, try again !");
   return; //console.log(error);
  } finally {
   //console.log("resp from user DB in profile page : ", response);
   router.replace("/");
  }
 };

 // delete user auth acc if other details nt provided during registeration
 const delUsrAcc = async () => {
  if (user) {
   try {
    await user.delete(); // 1
    router.replace("/");
   } catch (error) {
    //if the user delays in providing other user details than firebase trigeers an err, so we need to sign in again.
    handleSignIN();
   }
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
      Name<span>*</span>
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

     <label className={profileStyles.formLabel} htmlFor="phone">
      Mobile No<span>*</span>
     </label>
     <input
      className={profileStyles.formInput}
      type="tel"
      id="phone"
      name="phone"
      pattern="[6-9]\d{9}"
      maxLength="10"
      required
      onChange={handlePhoneChange}
      ref={phoneInputRef}
     />

     <label className={profileStyles.formLabel} htmlFor="address">
      Address<span>*</span>
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
