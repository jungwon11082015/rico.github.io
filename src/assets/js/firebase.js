import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


//firebase info
const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
};

initializeApp(firebaseConfig);


const db = getFirestore();


export { db };