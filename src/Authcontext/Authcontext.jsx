import { useContext, createContext, useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebase";
import { UserValue } from "../context/StateProvider";
import { actionType } from "../context/Reducer";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [{ user }, dispatch] = UserValue();
  const [user2, setUser2] = useState({});
  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
    dispatch({
      type: actionType.SET_USER,
      user: user.providerData[0],
    });
  };
  const logout = () => {
    signOut(auth);
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currUser) => {
      setUser2(currUser);
      dispatch({
        type: actionType.SET_USER,
        user: currUser.providerData[0],
      });
      // console.log("user", currUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={{ googleSignIn, user2, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
