import {useState} from "react";
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
 Timestamp,
} from "@firebase/firestore";

const db = getFirestore(firebase_app);

function Services() {
 const [selectedDate, setSelectedDate] = useState("");

 const queryServices = async () => {
  const dt = new Date(selectedDate);
  const myStamp = Timestamp.fromDate(dt);
  console.log("selectedDate -> ", selectedDate);
  console.log("dt 1 -> ", dt);
  console.log("dt 2 -> ", dt.toLocaleDateString());
  console.log("myStamp -> ", myStamp.toDate());

  const querySnapshot = await getDocs(
   query(
    collection(db, "users"),
    where("date", ">=", new Date("2023-04-10")),
    where("date", "<=", new Date(selectedDate))
   )
  );

  const filteredData = querySnapshot.docs.map((doc) => {
   const data = doc.data();
   console.log("Records = ", data);
  });

  //   const q = query(
  //    collection(db, "services"),
  //    orderBy("address", "asc"),
  //    limit(10)
  //   );
  //   onSnapshot(q, (snapshot) => {
  //    const Records = snapshot.docs.map((doc) => ({
  //     dtd: doc.data().date.toDate(),
  //    }));
  //    console.log("Records ", Records);
  //   });
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

// console.log("doc : ", doc.data().date.toDate().toLocaleDateString());
// let dd = new Date(doc.data().date);
// console.log("dd : ", dt.toLocaleDateString());
// if (doc.data().date.toDate().toLocaleDateString() === dt.toLocaleDateString()) {
//  console.log("Done....");
// }
