import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const [loading, setLoading]=useState(true);


  const createUser = (email, password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email, password);
  }

  const loginUser =(email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email, password);
  }
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }

  const logOut = () =>{
    setLoading(true)
    return signOut(auth)
}

const updateUserProfile =(name, photo, number) =>{
  return updateProfile(auth.currentUser,{
    displayName: name, photoURL: photo, phoneNumber: number
  })
}

  useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth,currentUser =>{
      setUser(currentUser);
      console.log('current user', currentUser);
      setLoading(false);
    })
    return () =>{
     return unsubscribe();
    }
  },[])

  const authInfo ={
    user,
    loading,
    createUser,
    loginUser,
    updateUserProfile,
    googleSignIn,
    logOut
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;