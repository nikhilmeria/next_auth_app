import Link from "next/link";
import jobStyles from "../../styles/Staff.module.css";

const Job = () => {
 return (
  <div className={jobStyles.main}>
   <h3>Coming Soon</h3>
   <br />
   <Link href="/">
    <button style={{cursor: "pointer"}} className={jobStyles.btn}>
     Home
    </button>
   </Link>
  </div>
 );
};

export default Job;
