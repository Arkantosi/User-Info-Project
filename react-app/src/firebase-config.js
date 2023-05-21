import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyA4ApF_f6QD9PlLEcz_8n_aJ2IeZVByZmU",
    authDomain: "fir-5b0b5.firebaseapp.com",
    projectId: "fir-5b0b5",
    storageBucket: "fir-5b0b5.appspot.com",
    messagingSenderId: "99490051979",
    appId: "1:99490051979:web:1f40bc3827bc333a31618e",
    measurementId: "G-K4JVDFTNB0"
  };


  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  export const db = getFirestore(app);