import {useState} from "react";
import signup from "../../components/signup";
import {useRouter} from "next/router";

function SignUp() {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const router = useRouter();

 const handleForm = async (event) => {
  event.preventDefault();

  const {result, error} = await signup(email, password);

  if (error) {
   return console.log("Signup page err: ", error);
  }

  // else successful
  console.log("Signup page : ", result);
  return router.push("/");
 };

 return (
  <div className="wrapper">
   <div className="form-wrapper">
    <h1 className="">Sign up</h1>
    <form onSubmit={handleForm} className="form">
     <label htmlFor="email">
      <p>Email</p>
      <input
       onChange={(e) => setEmail(e.target.value)}
       required
       type="email"
       name="email"
       id="email"
       placeholder="example@mail.com"
      />
     </label>
     <label htmlFor="password">
      <p>Password</p>
      <input
       onChange={(e) => setPassword(e.target.value)}
       required
       type="password"
       name="password"
       id="password"
       placeholder="password"
      />
     </label>
     <button type="submit">Sign up</button>
    </form>
   </div>
  </div>
 );
}

export default SignUp;
