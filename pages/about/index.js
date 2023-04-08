import Link from "next/link";
import Image from "next/legacy/image";
import aboutStyles from "../../styles/About.module.css";

function About() {
 return (
  <div className={aboutStyles.main}>
   <header className={aboutStyles.head}>
    <div className={aboutStyles.headImg}>
     <Image src="/images/logo.png" alt="company logo" width={50} height={45} />
    </div>
    <h2>About US</h2>
    <Link href="/">
     <Image src="/images/home1.png" alt="home" width={50} height={45}></Image>
    </Link>
   </header>

   <div className={aboutStyles.img}>
    <Image
     src="/images/hindu.jpg"
     layout="fill"
     objectFit="cover"
     alt="image"
    ></Image>
   </div>

   <div className={aboutStyles.stmt}>
    <h2>A Mission to Make an Impact</h2>
    <p>
     Shoorvir is a company that provides regular household services to
     customers, such as cleaning, cooking, laundry, grocery shopping, and other
     household tasks. We offer convenience and ease to busy individuals who are
     unable to take care of their daily chores due to their hectic schedule or
     physical limitations. Our service providers can be hired on a daily,
     weekly, or monthly basis, depending on the needs of the customer. They are
     trained professionals who offer customized services that meet the specific
     needs of each client. They are reliable, trustworthy, and committed to
     providing high-quality services to ensure that their customers' homes are
     clean and organized, and their daily needs are taken care of. We intend to
     save customers time and energy, making their lives easier and stress-free.
    </p>
   </div>

   <div className={aboutStyles.card}>
    <div className={aboutStyles.cardBox}>
     <div className={aboutStyles.cardImg}>
      <Image
       src="/images/commit.png"
       alt="cardImg"
       width={150}
       height={150}
       objectFit="cover"
      />
     </div>
     <div className={aboutStyles.cardContent}>
      <h2>Services</h2>
      <p>
       Experience convenience and ease with our daily household chores service
       for a stress-free life. Book now and make your life simpler!
      </p>
     </div>
    </div>

    <div className={aboutStyles.cardBox}>
     <div className={aboutStyles.cardImg}>
      <Image
       src="/images/job.png"
       alt="cardImg"
       width={150}
       height={150}
       objectFit="cover"
      />
     </div>
     <div className={aboutStyles.cardContent}>
      <h2>Job</h2>
      <p>
       Shoorvir helps helps to find your dream job. We connect you with local
       employers and opportunities that fit your skills and experience.
      </p>
     </div>
    </div>

    <div className={aboutStyles.cardBox}>
     <div className={aboutStyles.cardImg}>
      <Image
       src="/images/com.png"
       alt="cardImg"
       width={150}
       height={150}
       objectFit="cover"
      />
     </div>
     <div className={aboutStyles.cardContent}>
      <h2>Staff</h2>
      <p>
       Reliable staff, customized solutions. Our service offers professional
       employees for your business needs. Contact us today to learn more.
      </p>
     </div>
    </div>
   </div>
  </div>
 );
}

export default About;
