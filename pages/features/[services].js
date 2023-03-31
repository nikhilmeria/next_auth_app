import {useState, useEffect} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import serviceStyles from "../../styles/Services.module.css";

import firebase_app from "../../firebase_config";
import {getFirestore, doc, getDoc} from "firebase/firestore";
import {useAuthContext} from "../../context/authContext";

const db = getFirestore(firebase_app);

function Service(props) {
 const router = useRouter();
 const {user} = useAuthContext();
 const [myName, setMyName] = useState(null);
 const [myPhn, setMyPhn] = useState(null);
 const [myServ, setMyServ] = useState("");
 const [myAdd, setMyAdd] = useState(null);

 //console.log("Props in services : ", props);

 useEffect(() => {
  !user && router.replace("/profile");
 }, []);

 const handleSubmit = async (e) => {
  e.preventDefault();
  //   console.log(user.uid);
  //   console.log("name in services : ", myName);
  //   console.log("address in services : ", myAdd);
  //   console.log("phone in services : ", myPhn);

  try {
   const response = await fetch("/api/service", {
    method: "POST",
    body: JSON.stringify({
     nm: myName ? myName : props.name, //1
     ph: myPhn ? myPhn : props.phone_no,
     myServ,
     adr: myAdd ? myAdd : props.address,
     user_id: user.uid,
    }),
    headers: {"Content-Type": "application/json"},
   });
   const {data} = await response.json();

   router.replace("/");
   //console.log("result in service page : ", data);
  } catch (error) {
   toast.error("Something went wrong, try again !");
   return; //console.error(error);
  }
 };

 return (
  <>
   {user && (
    <>
     <div className={serviceStyles.main}>
      <h3>Shoorvir.com</h3>
      <form className={serviceStyles.form} onSubmit={handleSubmit}>
       <div className={serviceStyles.title}>नमस्ते</div>
       <div className={serviceStyles.subtitle}>How can we help you?</div>
       <div className={serviceStyles.inputContainer + " " + serviceStyles.ic1}>
        <input
         defaultValue={props.name}
         id="fullname"
         className={serviceStyles.input}
         type="text"
         placeholder=" "
         required
         onChange={(e) => setMyName(e.target.value)}
        />
        <div className={serviceStyles.cut}></div>
        <label htmlFor="fullname" className={serviceStyles.placeholder}>
         Full name<span>*</span>
        </label>
       </div>
       <div className={serviceStyles.inputContainer + " " + serviceStyles.ic2}>
        <input
         defaultValue={props.phone_no}
         id="phnNo"
         className={serviceStyles.input}
         type="tel"
         placeholder=" "
         required
         onChange={(e) => setMyPhn(e.target.value)}
        />
        <div className={serviceStyles.cut}></div>
        <label htmlFor="phnNo" className={serviceStyles.placeholder}>
         Phone No<span>*</span>
        </label>
       </div>
       <div className={serviceStyles.inputContainer + " " + serviceStyles.ic2}>
        <input
         defaultValue={props.address}
         id="add"
         className={serviceStyles.input}
         type="text"
         placeholder=" "
         required
         onChange={(e) => setMyAdd(e.target.value)}
        />
        <div className={serviceStyles.cut}></div>
        <label htmlFor="add" className={serviceStyles.placeholder}>
         Address<span>*</span>
        </label>
       </div>
       <div className={serviceStyles.inputContainer + " " + serviceStyles.ic2}>
        <input
         id="myServ"
         name="myServ"
         className={serviceStyles.input}
         value={myServ}
         type="text"
         placeholder=" "
         required
         onChange={(e) => setMyServ(e.target.value)}
        />
        <div className={serviceStyles.cut + " " + serviceStyles.cutShort}></div>
        <label htmlFor="myServ" className={serviceStyles.placeholder}>
         Service required<span>*</span>
        </label>
       </div>
       <button type="submit" className={serviceStyles.submit}>
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
      </form>
     </div>
    </>
   )}
  </>
 );
}

export default Service;

// Server Side
export async function getServerSideProps(context) {
 //console.log("ID in servData : ", context.query.uid);

 if (context.query.uid) {
  const docRef = doc(db, "users", context.query.uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
   //console.log("Document data 1 :", docSnap.data());
   const {name, address, phone_no} = docSnap.data();
   //console.log("Document data 2 : ", name);
   return {
    props: {
     address,
     name,
     phone_no,
    },
   };
  } else {
   // doc.data() will be undefined in this case
   //console.log("No such document!");
   return {
    props: {
     address: "",
     aname: "",
     phone_no: "",
    },
   };
  }
 } else {
  return {
   props: {},
  };
 }
}

//note on using toast- no styling to be provided in styles file. 'toast' method used above will provide the necessary
//1. this way data is passed in body bcoz we want to chk if user has changed default data in the form or no.