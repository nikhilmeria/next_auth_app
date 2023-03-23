import {useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import serviceStyles from "../../styles/Services.module.css";
import GoogleButton from "react-google-button";

import {useAuthContext} from "../../context/authContext";
import sign_in_google from "../../components/auth/sign_google";

function Service() {
 const router = useRouter();
 const {user} = useAuthContext();
 const [myName, setMyName] = useState("");
 const [myPhn, setMyPhn] = useState("");
 const [myServ, setMyServ] = useState("");

 const handleSignIN = async () => {
  console.log("inside handleSignIN");
  const {resp, error} = await sign_in_google();
  console.log("back from component");
  if (error) {
   return console.log(error);
  }
  // else successful
  console.log(resp.user.uid);
 };

 const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(user.uid);

  // validate data here

  // use this method to pass data frm one page to another
  router.replace({
   pathname: "/features/serv_chkout",
   query: {name: myName, no: myPhn, serv: myServ, user_id: user.uid},
  });

  //   toast.success("Form submitted !");
 };

 return (
  <>
   {user ? (
    <>
     <div className={serviceStyles.main}>
      <h3>Shoorvir.com</h3>
      <div className={serviceStyles.form}>
       <div className={serviceStyles.title}>नमस्ते</div>
       <div className={serviceStyles.subtitle}>How can we help you?</div>
       <div className={serviceStyles.inputContainer + " " + serviceStyles.ic1}>
        <input
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
         id="serv"
         className={serviceStyles.input}
         type="text"
         placeholder=" "
         required
         onChange={(e) => setMyServ(e.target.value)}
        />
        <div className={serviceStyles.cut + " " + serviceStyles.cutShort}></div>
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
   ) : (
    <GoogleButton type="dark" onClick={handleSignIN} />
   )}
  </>
 );
}

export default Service;

//note on using toast- no styling to be provided in styles file. 'toast' method used above will provide the necessary
