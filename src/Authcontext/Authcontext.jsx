import { useContext, createContext, useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, db } from "../config/firebase";
import { UserValue } from "../context/StateProvider";
import { actionType } from "../context/Reducer";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [{ user, foodItems }, dispatch] = UserValue();
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
  const saveItem = async (data) => {
    await setDoc(doc(db, "foodItems", `${data.title}`), data, {
      merge: true,
    });
  };
  const getAllItems = async () => {
    // const items = await getDocs(
    //   collection(db, "foodItems"),
    //   orderBy("id", "desc")
    // );
    // return items.docs.map((doc) => doc.data());
    const q = query(collection(db, "foodItems"));
    const querySnapshot = await getDocs(
      collection(db, "foodItems"),
      orderBy("id", "desc")
    );
    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.data());
    // });
    return querySnapshot.docs.map((doc) => doc.data());
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
    <AuthContext.Provider
      value={{ googleSignIn, user2, logout, saveItem, getAllItems }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
