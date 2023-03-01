import {useState} from "react";
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
   {/* <div classNameName={serviceStyles.serv}>
    <input
     type="text"
     value={myName}
     onChange={(e) => setMyName(e.target.value)}
     required
    />
    <input
     type="tel"
     value={myPhn}
     onChange={(e) => setMyPhn(e.target.value)}
     required
    />

    <form onSubmit={handleSubmit}>
     <label htmlFor="serv">Service</label>
     <select value={myValue} onChange={(e) => setMyValue(e.target.value)}>
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="opel">Opel</option>
      <option value="audi">Audi</option>
     </select>

     <button type="submit">Submit</button>
    </form>
   </div> */}
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
     submit
    </button>
   </div>
  </>
 );
}

export default Service;
