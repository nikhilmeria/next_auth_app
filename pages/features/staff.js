import Link from "next/link";
import staffStyles from "../../styles/Staff.module.css";

const Staff = () => {
 return (
  <div className={staffStyles.main}>
   <h3>Coming Soon</h3>
   <br />
   <Link href="/" className={staffStyles.btn}>
    <button>Home</button>
   </Link>
  </div>
 );
};

export default Staff;
