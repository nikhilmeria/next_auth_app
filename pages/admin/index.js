import Link from "next/link";
import adminStyles from "../../styles/Admin.module.css";

export default function Admin() {
 return (
  <div className={adminStyles.container}>
   <main className={adminStyles.main}>
    <h1 className={adminStyles.title}>
     Shoorvir.com <code className={adminStyles.dash}> Dashboard</code>
    </h1>

    <p className={adminStyles.description}>
     go back to
     <Link href="/">
      <code className={adminStyles.code}>Home</code>
     </Link>
    </p>

    <div className={adminStyles.grid}>
     <Link href="/admin/services" className={adminStyles.card}>
      <h2>Services &rarr;</h2>
      <p>
       Manage different aspects of the service section on various parameters.
      </p>
     </Link>

     <Link href="" className={adminStyles.card}>
      <h2>Job &rarr;</h2>
      <p>Manage different aspects of the job section on various parameters.</p>
     </Link>

     <Link href="" className={adminStyles.card}>
      <h2>Staff &rarr;</h2>
      <p>
       Manage different aspects of the staff section on various parameters.
      </p>
     </Link>

     <Link href="" className={adminStyles.card}>
      <h2>Misc &rarr;</h2>
      <p>Manage different aspects of the misc section on various parameters.</p>
     </Link>
    </div>
   </main>
  </div>
 );
}
