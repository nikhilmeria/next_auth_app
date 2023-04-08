import Link from "next/link";
import jobStyles from "../../styles/Job.module.css";

const Job = () => {
 return (
  <div className={jobStyles.main}>
   <h3>Coming Soon</h3>
   <br />
   <Link href="/" className={jobStyles.btn}>
    <button>Home</button>
   </Link>
  </div>
 );
};

export default Job;
