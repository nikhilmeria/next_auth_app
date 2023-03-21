import {useState, useEffect} from "react";
import {useRouter} from "next/router";
import GoogleButton from "react-google-button";

import sign_in_google from "../../components/sign_google";
import {useAuthContext} from "../../context/authContext";

function SignWithGoogle() {
 const {user} = useAuthContext();
 const [usrData, setUsrData] = useState("");
 const router = useRouter();

 useEffect(() => {
  console.log("User in google signIn page : ", user);
  //chk if user is logged in, yes-> push 2 home / sign page
  if (user != null) router.push("/");
 }, [user]);

 const handleForm = async () => {
  console.log("inside handleForm");
  const {resp, error} = await sign_in_google();
  console.log("back from component");
  if (error) {
   return console.log(error);
  }

  // else successful
  console.log(resp);
 };

 return (
  <div className="wrapper">
   <GoogleButton type="dark" onClick={handleForm} />
  </div>
 );
}

export default SignWithGoogle;
