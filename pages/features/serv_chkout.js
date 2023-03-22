import React from "react";
import {useRouter} from "next/router";

function Serv_chkout() {
 const router = useRouter();
 const {name} = router.query;

 console.log("Serv_chkout = ", name);

 return <div>Service checkout = {name}</div>;
}

export default Serv_chkout;
