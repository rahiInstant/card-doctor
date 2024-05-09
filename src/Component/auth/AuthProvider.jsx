import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "./firebase.config";
import useAxiosSecure from "../CustomHooks/useAxiosSecure";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        axiosSecure.post("/jwt", { email: userEmail }).then(() => "");
      } else {
        axiosSecure.post("/logout", { email: userEmail }).then(() => "");
      }
    });
    return () => {
      unSubscribe();
    };
  }, [user, axiosSecure]);
  // console.log(user);

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
