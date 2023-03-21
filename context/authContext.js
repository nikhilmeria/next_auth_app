import firebase_app from "../firebase_config";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {createContext, useContext, useState, useEffect} from "react";

const auth = getAuth(firebase_app);

export const AuthContext = createContext(null);

export const useAuthContext = () => useContext(AuthContext);

function AuthContextProvider({children}) {
 console.log("Inside authContext file");
 const [user, setUser] = useState();
 const [err, setErr] = useState();
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (usr) => {
   if (usr) {
    setUser(usr);
   } else {
    setUser(null);
   }
   setLoading(false);
  });

  return () => {
   unsubscribe();
  };
 }, []);

 return (
  <AuthContext.Provider value={{user}}>
   {loading ? <div>Loading...</div> : children}
  </AuthContext.Provider>
 );
}

export default AuthContextProvider;
