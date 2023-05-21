import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { EmailAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyBgE0TVA04J3lQ3o-j4rba1YEbPhTMeDEw",
	authDomain: "event-planner-f547d.firebaseapp.com",
	projectId: "event-planner-f547d",
	storageBucket: "event-planner-f547d.appspot.com",
	messagingSenderId: "716634321195",
	appId: "1:716634321195:web:21c99015610e98a8bcd56e",
	measurementId: "G-69M2SRCERK"
  };
  
// Initialize Firebase
let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const provider = new EmailAuthProvider();
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { provider, auth, storage };
export default db;
