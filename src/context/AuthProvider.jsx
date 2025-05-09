import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.init";

export const AuthContext = createContext();

const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {


  const [user, setUser] = useState({});

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const continueWithGoogle=()=>{
    return signInWithPopup(auth, googleProvider)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("User Tracking login or not");
      setUser(currentUser);
    });
    return () => unsubscribe();
  });

  const authInfo = {
    continueWithGoogle,
    createUser,
    signIn,
    updateUser,
    logOut,
    user,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
