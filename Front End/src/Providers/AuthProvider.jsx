import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  //Create User//
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Login User//
  const logIn = (email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword (auth, email, password);
  }

  //logOut User//
  const logOut = ()=>{
    setLoading(true);
    return signOut(auth);
  }

  //Hold Users//
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser=>{
      setUser(currentUser);
      setLoading(false);
    });
    return ()=>{
      return unSubscribe();
    }
  },[])

  //Google SignIn//
  const googleSignIn = ()=>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  const userInfo = {};
  createUser, logIn, logOut, googleSignIn, user, setUser, loading, setLoading;
  
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
