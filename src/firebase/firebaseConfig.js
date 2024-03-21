// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdR31YFrajzh3LW5b1-jBir0qR1DYvL6s",
  authDomain: "sustainable-thingy.firebaseapp.com",
  projectId: "sustainable-thingy",
  storageBucket: "sustainable-thingy.appspot.com",
  messagingSenderId: "982747080082",
  appId: "1:982747080082:web:901061ffc8041b5c364d4b",
  measurementId: "G-1J1PRCMSFZ",
};
//export const db = getFirestore(app);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export default app;
