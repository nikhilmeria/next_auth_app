import {useState} from "react";
import sign_in_google from "../../components/sign_google";
import {useRouter} from "next/router";
import GoogleButton from "react-google-button";

function SignWithGoogle() {
 const [email, setEmail] = useState("");
 const router = useRouter();

 const handleForm = async () => {
  console.log("inside handleForm");
  const {resp, error} = await sign_in_google();
  console.log("back from component");
  if (error) {
   return console.log(error);
  }

  // else successful
  console.log(resp);
  return router.push("/");
 };

 return (
  <div className="wrapper">
   <GoogleButton type="dark" onClick={handleForm} />
  </div>
 );
}

export default SignWithGoogle;
