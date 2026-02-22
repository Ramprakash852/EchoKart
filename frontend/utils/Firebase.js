
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "spokekart.firebaseapp.com",
  projectId: "spokekart",
  storageBucket: "spokekart.firebasestorage.app",
  messagingSenderId: "508432558175",
  appId: "1:508432558175:web:c0fd10c6658d6ad10c93ea",
  measurementId: "G-X8TL317JH2"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider= new GoogleAuthProvider()

export {auth,provider} 