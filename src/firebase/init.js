import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// firebase info
// const firebaseConfig = {
//   apiKey: process.env.VUE_APP_API_KEY,
//   authDomain:  process.env.VUE_APP_AUTH_DOMAIN,
//   databaseURL:  process.env.VUE_APP_DATABASE_URL,
//   projectId:  process.env.VUE_APP_APP_ID,
//   storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.VUE_APP_APP_MEASUREMENTID,
//   appId: process.env.VUE_APP_APP_ID,
//   measurementId:  process.env.VUE_APP_APP_MEASUREMENTID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDTV5FH25uhufL7TyVnKqK9LRS5Yn26cE4",
  authDomain: "protfilo2023.firebaseapp.com",
  databaseURL: "https://protfilo2023-default-rtdb.firebaseio.com",
  projectId: "protfilo2023",
  storageBucket: "protfilo2023.appspot.com",
  messagingSenderId: "1017734536453",
  appId: "1:1017734536453:web:6a744311c6fb4abf6a2b6c",
  measurementId: "G-YNK4MYE5H9"
};


initializeApp(firebaseConfig);

const db = getFirestore();
const storage = getStorage();

export { db, storage };

