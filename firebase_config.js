// Import the functions you need from the SDKs you need
import firebase, {initializeApp, getApps} from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const userCredentials = {
 apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
 authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
 projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
 storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
 messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
 appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
 measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
getApps().length === 0 ? initializeApp(userCredentials) : getApps()[0];

export default firebase;


//firebase google auth with  next.js ssr func.
//https://github.com/ThomasSwolfs/nextjs-firebase-auth-ssr-example