import {useEffect, useState} from "react";
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
 const [selectedDate, setSelectedDate] = useState("");
 const [data, setData] = useState([]);

 useEffect(() => {
  console.log("Data has been updated: ", data);
 }, [data]);

 const queryServices = async () => {
  console.log("selectedDate -> ", selectedDate);

  try {
   const querySnapshot = await getDocs(
    query(
     collection(db, "services"),
     where("date", ">=", new Date("2023-04-10")),
     where("date", "<=", new Date(selectedDate))
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
    value={selectedDate}
    onChange={(e) => setSelectedDate(e.target.value)}
   />
   <button onClick={queryServices}>Search</button>
  </div>
 );
}

export default Services;
