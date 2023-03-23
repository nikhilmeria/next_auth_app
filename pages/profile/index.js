import {useState} from "react";
import {Button} from "react-bootstrap";
import GoogleButton from "react-google-button";

import sign_in_google from "../../components/auth/sign_google";

function Profile() {
 const [name, setName] = useState("");
 const [phnNo, setPhnNO] = useState(0);
 const [address, setAddress] = useState("");

 const handleSignIN = async (e) => {
  e.preventDefault();

  const {resp, error} = await sign_in_google(name, phnNo, address);
  console.log("back from component");
  if (error) {
   return console.log(error);
  }
  // else successful
  console.log(resp.user.uid);
 };

 return (
  <div>
   <h2> Profile page </h2>
   <form>
    <label>Enter Name : </label>
    <input type="text" onChange={(e) => setName(e.target.value)} />
    <label>Enter Phone No : </label>
    <input type="number" onChange={(e) => setPhnNO(e.target.value)} />
    <label>Enter Address : </label>
    <input type="text" onChange={(e) => setAddress(e.target.value)} />
    <GoogleButton type="dark" onClick={handleSignIN} />
   </form>
  </div>
 );
}

export default Profile;
