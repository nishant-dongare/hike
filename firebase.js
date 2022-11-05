import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const fbConfig = {
  apiKey: "AIzaSyDeQsEK5Vb7mF1T99JL5vBW94rA7SCsUFQ",
  authDomain: "hike-ebfbc.firebaseapp.com",
  projectId: "hike-ebfbc",
  storageBucket: "hike-ebfbc.appspot.com",
  messagingSenderId: "109314709334",
  appId: "1:109314709334:web:8bc7f892dbfc415334e8f7",
  measurementId: "G-JGZXDHCVYL",
};

const app = getApps().length === 0 ? initializeApp(fbConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
