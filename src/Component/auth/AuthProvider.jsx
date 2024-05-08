import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  //   TwitterAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "./firebase.config";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  //   const twitterProvider = new TwitterAuthProvider();
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      console.log("user mail", userEmail);
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        axios
          .post(
            "http://localhost:8080/jwt",
            { email: userEmail },
            { withCredentials: true }
          )
          .then((res) => console.log(res.data));
      } else {
        axios
          .post(
            "http://localhost:8080/logout",
            { email: userEmail },
            { withCredentials: true }
          )
          .then((res) => console.log(res.data));
      }
    });
    return () => {
      unSubscribe();
    };
  }, [user]);
  console.log(user);

  function createUser(email, pass) {
    return createUserWithEmailAndPassword(auth, email, pass);
  }

  function logIn(email, pass) {
    return signInWithEmailAndPassword(auth, email, pass);
  }

  function logOut() {
    return signOut(auth);
  }

  function googleSignIn() {
    return signInWithPopup(auth, googleProvider);
  }
  function facebookSignIn() {
    return signInWithPopup(auth, facebookProvider);
  }
  //   function twitterSignIn() {
  //     return signInWithPopup(auth, twitterProvider);
  //   }

  const autInfo = {
    user,
    loading,
    createUser,
    setLoading,
    logIn,
    googleSignIn,
    facebookSignIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={autInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
