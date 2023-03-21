import "../styles/globals.css";
import AuthContext from "../context/authContext";

function MyApp({Component, pageProps}) {
 return (
  <AuthContext>
   <Component {...pageProps} />
  </AuthContext>
 );
}

export default MyApp;
