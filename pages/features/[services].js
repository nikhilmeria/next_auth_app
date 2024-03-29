import {useState, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/router";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import admin from "firebase-admin";
import Modal from "react-modal";

import serviceStyles from "../../styles/Services.module.css";
import {useAuthContext} from "../../context/authContext";
import Loading from "../../components/loading";

function Service(props) {
 const router = useRouter();
 const {user} = useAuthContext();
 const [myName, setMyName] = useState(null);
 const [myPhn, setMyPhn] = useState(null);
 const [myServ, setMyServ] = useState("");
 const [myAdd, setMyAdd] = useState(null);
 const [isLoading, setIsLoading] = useState(false);

 console.log("Props in services : ", props);
 console.log("user in services : ", user);

 useEffect(() => {
  // !user && router.replace("/profile");

  function preventPullToRefresh() {
   var lastTouchY = 0;
   document.addEventListener(
    "touchstart",
    function (e) {
     if (e.touches.length !== 1) return;
     lastTouchY = e.touches[0].clientY;
    },
    {passive: false}
   );

   document.addEventListener(
    "touchmove",
    function (e) {
     var touchY = e.touches[0].clientY;
     var touchYDelta = touchY - lastTouchY;
     lastTouchY = touchY;
     if (touchYDelta > 0) {
      e.preventDefault();
      return;
     }
    },
    {passive: false}
   );
  }

  preventPullToRefresh();
 }, []);

 const handleSubmit = async (e) => {
  e.preventDefault();

  setIsLoading(true);

  console.log(user.uid);
  console.log("name in services : ", myName);
  console.log("address in services : ", myAdd);
  console.log("phone in services : ", myPhn);

  try {
   const response = await fetch("/api/service", {
    method: "POST",
    body: JSON.stringify({
     nm: myName ? myName : props.nm, //1
     ph: myPhn ? myPhn : props.phNum,
     myServ,
     adr: myAdd ? myAdd : props.ad,
     user_id: user.uid,
    }),
    headers: {"Content-Type": "application/json"},
   });
   const {data} = await response.json();

   setTimeout(() => {
    setIsLoading(false);
    router.replace("/");
   }, 2500);

   toast.success("Service Request placed !", {
    position: toast.POSITION.TOP_RIGHT,
   });

   //call the email api to send a mail after successfully posting in service DB
   //  try {
   //   const response = await fetch("/api/email", {
   //    method: "POST",
   //    body: JSON.stringify({
   //     nm: myName ? myName : props.nm, //1
   //     ph: myPhn ? myPhn : props.phNum,
   //     email: user.email,
   //     message: `${myServ} related service is required...`,
   //    }),
   //    headers: {"Content-Type": "application/json"},
   //   });
   //   const {data} = await response.json();

   //   router.replace("/");
   //  } catch (error) {
   //   console.error("Error sending email : ", error);
   //   return;
   //  }
  } catch (error) {
   setIsLoading(false);
   toast.error("Something went wrong, try again !", {
    position: toast.POSITION.TOP_RIGHT,
   });
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
         defaultValue={props.nm}
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
         defaultValue={props.phNum}
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
         defaultValue={props.ad}
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
        autoClose={1500}
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
       <div className={serviceStyles.socialIcons}>
        <Link href="https://wa.me/+919458758638" target="_blank">
         <Image
          src="/images/whatsapp.png"
          alt="whatsapp"
          width={72}
          height={16}
         />
        </Link>
       </div>
      </form>
     </div>
    </>
   )}
   {isLoading && <Loading />}
   <Modal
    isOpen={!user}
    shouldCloseOnEsc={false}
    shouldCloseOnOverlayClick={false}
    style={{
     overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
     },
     content: {
      backgroundColor: "white",
      borderRadius: "10px",
      padding: "50px",
      maxWidth: "60vw",
      minHeight: "35vh",
      margin: "30vh auto",
     },
    }}
   >
    <h2>you need to Login first</h2>
    <div>
     <button
      type="submit"
      onClick={() => {
       console.log("user in Modal : ", user);
       router.replace("/profile");
      }}
     >
      Login
     </button>
    </div>
   </Modal>
  </>
 );
}

export default Service;

// Server Side
export async function getServerSideProps(context) {
 const serviceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
 };

 if (!admin.apps.length) {
  admin.initializeApp({
   credential: admin.credential.cert(serviceAccount),
  });
 }

 console.log("ID in servData : ", context.query.uid);

 if (context.query.uid) {
  try {
   const userRef = admin.firestore().collection("users").doc(context.query.uid);
   const userSnapshot = await userRef.get();
   const userData = userSnapshot.data();
   console.log("user data in server : ", userData);

   return {
    props: {
     phNum: userData.phone_no,
     ad: userData.address,
     nm: userData.name,
    },
   };
  } catch (error) {
   console.log("user err in server : ", error);
   return {
    props: {},
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
 
//* To fetch all documents in a collection.
  //   const snapshot = await admin.firestore().collection("users").doc();
  //   const data = snapshot.docs.map((doc) => doc.data());
  //   console.log("user data in server : ", data);
//* 