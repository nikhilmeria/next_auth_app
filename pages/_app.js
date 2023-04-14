import "../styles/globals.css";
import {setAppElement} from "react-modal";

import AuthContext from "../context/authContext";

// Set the app root element for the Modal library
setAppElement("#__next");

function MyApp({Component, pageProps}) {
 return (
  <AuthContext>
   <Component {...pageProps} />
  </AuthContext>
 );
}

export default MyApp;
