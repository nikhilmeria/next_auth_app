import {useEffect} from "react";
import adminServStyles from "../../styles/Adm_serv.module.css";

function Services() {
 function myFunction() {
  alert("I am an alert box!");
 }

 return (
  <div className={adminServStyles.container}>
   <h3>Services</h3>
   <button onClick={myFunction}>Try it</button>
  </div>
 );
}

export default Services;
