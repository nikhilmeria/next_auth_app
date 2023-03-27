import Link from "next/link";
import Image from "next/legacy/image";
import aboutStyles from "../../styles/About.module.css";

function About() {
 return (
  <div className={aboutStyles.main}>
   <h3>About</h3>

   <div className={aboutStyles.img}>
    <Image
     src="/images/about.jpg"
     layout="fill"
     objectFit="cover"
     alt="image"
    ></Image>
   </div>

   <div className={aboutStyles.section}>
    <div className={aboutStyles.secChild}>
     <Image></Image>
     <h4></h4>
     <p></p>
    </div>
    <div className={aboutStyles.secChild}>
     <Image></Image>
     <h4></h4>
     <p></p>
    </div>
    <div className={aboutStyles.secChild}>
     <Image></Image>
     <h4></h4>
     <p></p>
    </div>
    <div className={aboutStyles.secChild}>
     <Image></Image>
     <h4></h4>
     <p></p>
    </div>
   </div>

   <div className={aboutStyles.stmt}>
    <h2>A Mission to Make an Impact</h2>
    <p>
     Capital One was founded on the belief that no one should be locked out of
     the financial system. Today, our deep commitment to financial inclusion is
     reflected in our business, community partnerships, philanthropy, and most
     importantly, support for our customers. We are on a mission to change
     banking for good.
    </p>
   </div>

   <div className={aboutStyles.card}>
    <div className={aboutStyles.cardImg}>
     <Image
      src="/images/commit.png"
      alt={title}
      width={150}
      height={150}
      objectFit="cover"
     />
    </div>
    <div className={aboutStyles.cardContent}>
     <h2>Card</h2>
     <p>
      Capital One was founded on the belief that no one should be locked out of
      the financial system. Today, our deep commitment to financial inclusion is
     </p>
    </div>
   </div>
  </div>
 );
}

export default About;
