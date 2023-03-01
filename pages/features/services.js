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
   <div className={serviceStyles.serv}>
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

    <label htmlFor="serv">Service</label>
    <select
     id="cars"
     onChange={(e) => setMyValue(e.target.selectedOptions[0].label)}
    >
     <option value="volvo">Volvo</option>
     <option value="saab">Saab</option>
     <option value="opel">Opel</option>
     <option value="audi">Audi</option>
    </select>

    <button type="submit" onClick={handleSubmit}>
     Submit
    </button>
   </div>
  </>
 );
}

export default Service;
