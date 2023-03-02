import {useState} from "react";
import Link from "next/link";
import serviceStyles from "../../styles/Services.module.css";

function Service() {
 const [myName, setMyName] = useState("");
 const [myPhn, setMyPhn] = useState("");
 const [myServ, setMyServ] = useState("");

 const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(myName);
  console.log(myPhn);
  console.log(myServ);

  const response = await fetch("/api/form", {
   method: "POST",
   body: JSON.stringify({myName, myPhn, myServ}),
   headers: {"Content-Type": "application/json"},
  });

  const {data} = await response.json();
  console.log("result : ", data);
 };

 return (
  <div className={serviceStyles.main}>
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
      id="add"
      className={serviceStyles.input}
      type="text"
      placeholder=" "
      required
     />
     <div className={serviceStyles.cut + " " + serviceStyles.cutShort}></div>
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
     <div className={serviceStyles.cut + " " + serviceStyles.cutShort}></div>
     <label htmlFor="serv" className={serviceStyles.placeholder}>
      Service required
     </label>
    </div>
    <button type="text" className={serviceStyles.submit} onClick={handleSubmit}>
     Submit
    </button>
    <Link href="/">
     <div className={serviceStyles.back}>
      <h5>Cancel</h5>
     </div>
    </Link>
   </div>
  </div>
 );
}

export default Service;
