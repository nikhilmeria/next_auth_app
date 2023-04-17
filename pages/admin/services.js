import {useEffect, useState} from "react";
import Link from "next/link";
import adminServStyles from "../../styles/Adm_serv.module.css";

import firebase_app from "../../firebase_config";
import {
 getFirestore,
 collection,
 query,
 where,
 orderBy,
 getDocs,
 onSnapshot,
 limit,
} from "@firebase/firestore";

const db = getFirestore(firebase_app);

function Services() {
 const [startDate, setStartDate] = useState("");
 const [endDate, setEndDate] = useState("");
 const [data, setData] = useState([]);

 useEffect(() => {
  console.log("Data has been updated: ", data);
 }, [data]);

 const queryServices = async () => {
  console.log("endDate -> ", endDate);
  console.log("startDate -> ", startDate);

  try {
   const querySnapshot = await getDocs(
    query(
     collection(db, "services"),
     where("date", ">=", new Date(startDate)),
     where("date", "<=", new Date(endDate))
    )
   );

   const tempData = querySnapshot.docs.map((doc) => doc.data());
   setData(tempData);
  } catch (error) {
   console.error("Error getting documents: ", error);
  }
 };

 return (
  <div className={adminServStyles.container}>
   <h3>Admin - Services</h3>
   <input
    type="date"
    value={startDate}
    placeholder="Start Date"
    onChange={(e) => setStartDate(e.target.value)}
   />
   <input
    type="date"
    value={endDate}
    placeholder="End Date"
    onChange={(e) => setEndDate(e.target.value)}
   />
   <button onClick={queryServices}>Search</button>
   <button onClick={queryServices}>
    <Link href="/admin">Cancel</Link>
   </button>
   <div className={adminServStyles.result}>
    {data.length === 0 ? (
     <h4>No Data Found</h4>
    ) : (
     <>
      {data.map((ei) => (
       <div key={ei.date}>
        <h3>{ei.name}</h3>
        <h3>{ei.phone_no}</h3>
        <p>{ei.address}</p>
        <h4>{ei.service_req}</h4>
        <p>
         {new Date(ei.date.seconds * 1000).toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
         })}
        </p>
       </div>
      ))}
     </>
    )}
   </div>
  </div>
 );
}

export default Services;
