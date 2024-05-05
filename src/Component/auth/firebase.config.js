import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJU4QTS6n-6MAVononSj0454k0fXkO_HQ",
  authDomain: "car-engin.firebaseapp.com",
  projectId: "car-engin",
  storageBucket: "car-engin.appspot.com",
  messagingSenderId: "795516023877",
  appId: "1:795516023877:web:cd38d92c543ef6eaaedf2c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
