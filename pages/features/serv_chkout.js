import {useState} from "react";
import {useRouter} from "next/router";

function Serv_chkout() {
 const router = useRouter();
 const {name, no, serv, user_id} = router.query; //data coming frm service page
 const [address, setAddress] = useState("");

 console.log("Serv_chkout = ", user_id);

 const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(address);

  try {
   const response = await fetch("/api/form", {
    method: "POST",
    body: JSON.stringify({name, no, serv, address, user_id}),
    headers: {"Content-Type": "application/json"},
   });
   const {data} = await response.json();

   console.log("result : ", data);
  } catch (error) {
   console.error(error);
  } finally {
   router.replace("/");
  }
 };

 return (
  <>
   <div>Service checkout = {name}</div>
   <form onSubmit={handleSubmit}>
    <label>Enter address</label>
    <input type="text" onChange={(e) => setAddress(e.target.value)} />
    <button type="submit">Checkout</button>
   </form>
  </>
 );
}

export default Serv_chkout;
