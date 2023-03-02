import {useState} from "react";
import Link from "next/link";
import serviceStyles from "../../styles/Services.module.css";

function Service() {
 const [myName, setMyName] = useState("");
 const [myPhn, setMyPhn] = useState("");
 const [myValue, setMyValue] = useState("");

 const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(myName);
  console.log(myPhn);
  console.log(myValue);

  const response = await fetch("/api/form", {
   method: "POST",
   body: JSON.stringify({myName, myPhn, myValue}),
   headers: {"Content-Type": "application/json"},
  });

  const {data} = await response.json();
  console.log("result : ", data);
 };

 return (
  <>
   <div className={serviceStyles.form}>
    <div className={serviceStyles.title}>Welcome</div>
    <div className={serviceStyles.subtitle}>Let's create your account!</div>
    <div className={serviceStyles.inputContainer + " " + serviceStyles.ic1}>
     <input
      id="firstname"
      className={serviceStyles.input}
      type="text"
      placeholder=" "
     />
     <div className={serviceStyles.cut}></div>
     <label htmlFor="firstname" className={serviceStyles.placeholder}>
      First name
     </label>
    </div>
    <div className={serviceStyles.inputContainer + " " + serviceStyles.ic2}>
     <input
      id="lastname"
      className={serviceStyles.input}
      type="text"
      placeholder=" "
     />
     <div className={serviceStyles.cut}></div>
     <label htmlFor="lastname" className={serviceStyles.placeholder}>
      Last name
     </label>
    </div>
    <div className={serviceStyles.inputContainer + " " + serviceStyles.ic2}>
     <input
      id="email"
      className={serviceStyles.input}
      type="text"
      placeholder=" "
     />
     <div className={serviceStyles.cut + " " + serviceStyles.cutShort}></div>
     <label htmlFor="email" className={serviceStyles.placeholder}>
      Email
     </label>
    </div>
    <button type="text" className={serviceStyles.submit}>
     Submit
    </button>
    <Link href="/">
     <div className={serviceStyles.back}>
      <h5>Cancel</h5>
     </div>
    </Link>
   </div>
  </>
 );
}

export default Service;
