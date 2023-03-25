import {useState, useEffect} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import serviceStyles from "../../styles/Services.module.css";
//import GoogleButton from "react-google-button";

import firebase_app from "../../firebase_config";
import {getFirestore, doc, getDoc} from "firebase/firestore";
import {useAuthContext} from "../../context/authContext";
//import sign_in_google from "../../components/auth/sign_google";

const db = getFirestore(firebase_app);

function Service(props) {
 const router = useRouter();
 const {user} = useAuthContext();
 const [myName, setMyName] = useState("");
 const [myPhn, setMyPhn] = useState("");
 const [myServ, setMyServ] = useState("");
 const [myAdd, setMyAdd] = useState("");

 console.log("Props in services : ", props);

 useEffect(() => {
  !user && router.replace("/profile");
 }, []);

 const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(user.uid);

  try {
   const response = await fetch("/api/form", {
    method: "POST",
    body: JSON.stringify({myName, myPhn, myServ, myAdd, user_id: user.uid}),
    headers: {"Content-Type": "application/json"},
   });
   const {data} = await response.json();

   console.log("result in service page : ", data);
  } catch (error) {
   console.error(error);
  } finally {
   //router.replace("/");
  }
 };
 //  const handleSignIN = async () => {
 //   console.log("inside handleSignIN");
 //   const {resp, error} = await sign_in_google();
 //   console.log("back from component");
 //   if (error) {
 //    return console.log(error);
 //   }
 //   // else successful
 //   console.log(resp.user.uid);
 //  };

 // old Method when I had serv_chkout page.
 //  const handleSubmit = async (e) => {
 //   e.preventDefault();
 //   console.log(user.uid);

 //   // validate data here

 //   // use this method to pass data frm one page to another
 //   router.replace({
 //    pathname: "/features/serv_chkout",
 //    query: {
 //     name: myName,
 //     no: myPhn,
 //     serv: myServ,
 //     address: myAdd,
 //     user_id: user.uid,
 //    },
 //   });

 //   //   toast.success("Form submitted !");
 //  };

 return (
  <>
   {
    user && (
     <>
      <div className={serviceStyles.main}>
       <h3>Shoorvir.com</h3>
       <div className={serviceStyles.form}>
        <div className={serviceStyles.title}>नमस्ते</div>
        <div className={serviceStyles.subtitle}>How can we help you?</div>
        <div className={serviceStyles.inputContainer + " " + serviceStyles.ic1}>
         <input
          defaultValue={props.user_name && props.user_name}
          id="fullname"
          className={serviceStyles.input}
          type="text"
          placeholder=" "
          required
          onChange={(e) => setMyName(e.target.value)}
         />
         <div className={serviceStyles.cut}></div>
         <label htmlFor="fullname" className={serviceStyles.placeholder}>
          Full name
         </label>
        </div>
        <div className={serviceStyles.inputContainer + " " + serviceStyles.ic2}>
         <input
          defaultValue={props.Phone_No && props.Phone_No}
          id="phnNo"
          className={serviceStyles.input}
          type="tel"
          placeholder=" "
          required
          onChange={(e) => setMyPhn(e.target.value)}
         />
         <div className={serviceStyles.cut}></div>
         <label htmlFor="phnNo" className={serviceStyles.placeholder}>
          Phone No
         </label>
        </div>
        <div className={serviceStyles.inputContainer + " " + serviceStyles.ic2}>
         <input
          defaultValue={props.Address && props.Address}
          id="add"
          className={serviceStyles.input}
          type="text"
          placeholder=" "
          required
          onChange={(e) => setMyAdd(e.target.value)}
         />
         <div className={serviceStyles.cut}></div>
         <label htmlFor="add" className={serviceStyles.placeholder}>
          Address
         </label>
        </div>
        <div className={serviceStyles.inputContainer + " " + serviceStyles.ic2}>
         <input
          id="serv"
          className={serviceStyles.input}
          type="text"
          placeholder=" "
          required
          onChange={(e) => setMyServ(e.target.value)}
         />
         <div
          className={serviceStyles.cut + " " + serviceStyles.cutShort}
         ></div>
         <label htmlFor="serv" className={serviceStyles.placeholder}>
          Service required
         </label>
        </div>
        <button
         type="text"
         className={serviceStyles.submit}
         onClick={handleSubmit}
        >
         Submit
        </button>
        <ToastContainer
         autoClose={1000}
         position="top-right"
         theme="colored"
         closeOnClick={true}
         pauseOnHover={true}
         hideProgressBar={false}
        />
        <Link href="/">
         <div className={serviceStyles.back}>
          <h5>Home</h5>
         </div>
        </Link>
       </div>
      </div>
     </>
    )
    //    : (
    //     <GoogleButton type="dark" onClick={handleSignIN} />
    //    )
   }
  </>
 );
}

export default Service;

export async function getServerSideProps(context) {
 console.log("ID in servData : ", context.query.uid);

 const docRef = doc(db, "users", context.query.uid);
 const docSnap = await getDoc(docRef);

 if (docSnap.exists()) {
  console.log("Document data 1 :", docSnap.data());
  const {user_name, Address, Phone_No} = docSnap.data();
  console.log("Document data 2 : ", user_name);
  return {
   props: {
    Address,
    user_name,
    Phone_No,
   },
  };
 } else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
  return {
   props: {
    Address: null,
    user_name: null,
    Phone_No: null,
   },
  };
 }
}

//note on using toast- no styling to be provided in styles file. 'toast' method used above will provide the necessary
