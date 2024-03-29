import {useState, useEffect} from "react";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import firebase_app from "../firebase_config";
import {getAuth} from "firebase/auth";
import {useAuthContext} from "../context/authContext";

export default function Home() {
 const {user} = useAuthContext();
 const auth = getAuth(firebase_app);
 const [showDiv, setShowDiv] = useState(true);
 const [clsName, setClsName] = useState(false);
 const [winObj, setWinObj] = useState(null); //1

 //user && console.log("user in home : ", user.uid);

 useEffect(() => {
  setWinObj(window);

  function handleScroll() {
   if (window.scrollY === 0) {
    setShowDiv(true);
    setWinObj(window);
   } else {
    setShowDiv(false);
    setWinObj(null);
   }
  }

  window.addEventListener("scroll", handleScroll);

  return () => {
   window.removeEventListener("scroll", handleScroll);
  };
 }, []);

 return (
  <>
   <Head>
    <title>Shoorvir</title>
    <meta
     name="shoorvir.com"
     content="daily needs related service providers for free."
    />
    <link rel="icon" href="/images/logo.png" />
   </Head>

   <header>
    <nav className={styles.navG}>
     <Image src="/images/logo.png" alt="Shoorvir Logo" width={72} height={16} />
     <ul
      className={
       winObj != null
        ? winObj.scrollY === 0 && clsName
          ? styles.navMenu + " " + styles.active
          : styles.navMenu
        : styles.navMenu
      } // 1
     >
      <li>
       <Link href="#" className={styles.navLink}>
        Home
       </Link>
      </li>
      <li>
       <Link href="/about" className={styles.navLink}>
        About
       </Link>
      </li>
      {user && user.email === "klokroom@gmail.com" ? (
       <li>
        <Link href="/admin" className={styles.navLink}>
         Admin
        </Link>
       </li>
      ) : (
       <li>
        <Link href="/feedback" className={styles.navLink}>
         Feedback
        </Link>
       </li>
      )}
      <li>
       <Link href="#contact" className={styles.navLink}>
        Contact
       </Link>
      </li>
      {!user && (
       <li title="Sign In">
        <Link href="/profile" className={styles.navLink}>
         <Image
          src="/images/account.png"
          alt="user"
          width={72}
          height={16}
         ></Image>
        </Link>
       </li>
      )}
      {user && (
       <li title="Signout">
        <Link
         href=""
         className={styles.navLink}
         onClick={(e) => {
          e.preventDefault();
          auth.signOut();
         }}
        >
         <Image
          src="/images/logout.png"
          alt="user"
          width={72}
          height={16}
         ></Image>
        </Link>
       </li>
      )}
     </ul>
     <div
      className={
       clsName ? styles.hamburger + " " + styles.active : styles.hamburger
      }
      onClick={() => {
       setClsName(!clsName);
      }}
     >
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
     </div>
    </nav>
   </header>

   <section className={styles.header}>
    <div className={styles.headerText}>
     <h1>What's Shoorvir ?</h1>
     <p>
      Shoorvir is a social service initiative for the Hindu community at large.
      We strive to provide unemployed youth with an opportunity to provide
      services to households as per their skillsets, as well as find suitable
      jobs for them. We even engage in the domain of connecting prospective
      employers with suitable candidates. Our services are totally FREE of
      charge.
     </p>
     <button className={styles.button + " " + styles.button1}>
      <a href="/about">Read More</a>
     </button>
    </div>
   </section>

   <section className={styles.features}>
    <Link href={{pathname: "/features/services", query: user}}>
     <div className={styles.card + " " + styles.cardFixedWidth}>
      <div className={styles.card__description}>
       <Image
        src="/images/service.png"
        alt="Service"
        width={200}
        height={175}
       />
      </div>
      <div className={styles.card__text}>
       <h3>Service</h3>
      </div>
     </div>
    </Link>
    <Link href="/features/job">
     <div className={styles.card + " " + styles.cardFixedWidth}>
      <div className={styles.card__description}>
       <Image src="/images/job.jpg" alt="Job" width={200} height={175} />
      </div>
      <div className={styles.card__text}>
       <h3>Job</h3>
      </div>
     </div>
    </Link>
    <Link href="/features/staff">
     <div className={styles.card + " " + styles.cardFixedWidth}>
      <div className={styles.card__description}>
       <Image src="/images/staff.jpg" alt="Staff" width={200} height={175} />
      </div>
      <div className={styles.card__text}>
       <h3>Staff</h3>
      </div>
     </div>
    </Link>
   </section>

   <section className={styles.yt}>
    <div className={styles.ytVidContainer}>
     <div className={styles.ytVid}>
      <iframe src="https://www.youtube.com/embed/QQ8HunsEZXI"></iframe>
     </div>
     <div className={styles.ytVid}>
      <iframe src="https://www.youtube.com/embed/9BD3V0VDL9Y"></iframe>
     </div>
     <div className={styles.ytVid}>
      <iframe src="https://www.youtube.com/embed/9Ml5LiEW80Y  "></iframe>
     </div>
    </div>
    <div className={styles.ytTxt}>
     <h3>Featured videos on our youtube channel</h3>
    </div>
   </section>

   {/* Contact */}
   <footer id="contact" className={styles.foot}>
    <div className={styles.footCard}>
     <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448693.88667775143!2d76.92807570120118!3d28.52706325802526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1676648066694!5m2!1sen!2sin"
      width="300"
      height="200"
      style={{border: 0}}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
     ></iframe>
    </div>
    <div className={styles.footCard}>
     <h3>e-mail : bhartiya@shoorvir.com</h3>
     <h3>Mobile : 9458758638</h3>

     {/* Social Icons */}
     <div className={styles.socialIcons}>
      <Link href="https://wa.me/+919458758638" target="_blank">
       <Image
        src="/images/whatsapp.png"
        alt="whatsapp"
        width={72}
        height={16}
       />
      </Link>
      <Link href="#" target="_blank">
       <Image
        src="/images/instagram.png"
        alt="instagram"
        width={72}
        height={16}
       />
      </Link>
      <Link href="#" target="_blank">
       <Image
        src="/images/fb.png"
        alt="facebook logo "
        width={72}
        height={16}
       />
      </Link>
     </div>

     <h2>Contact Us</h2>
    </div>
   </footer>

   <section className={styles.copyright}>
    <div className={styles.copyrt}>
     <p>शूरवीर, नई दिल्ली. &copy; २०२३</p>
    </div>
   </section>

   {showDiv && (
    <div className={styles.bottom}>
     <p>Proud to be a HINDU.....</p>
    </div>
   )}

   {/* <Script type="text/javascript" src="/js/support.js" /> */}
  </>
 );
}

//
// 1. winObj is used bcoz we need the 'window' obj while setting the class names. window obj is not avab while the component is loading so we use the useEffect hook here. all this exercise is not hide navMenu when the user scrolls down in mobile view.
