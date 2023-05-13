import React, { createContext, useEffect, useState } from "react";
import { auth, db } from "../Config";
import firebase from "firebase/compat/app";

export const ContextProvider = createContext();
export const ContextFun = (props) => {
  const [user, setuser] = useState(null);
  const [loader, setloader] = useState(true);
  const [allMsg, setAllmsg] = useState([]);
  let register = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        firebase.auth().signInWithRedirect();
      });
  };
  const logout = () => {
    auth.signOut().then(() => {
      setuser(null);
    });
  };
  const sendMessage = (msg) => {
    db.collection("messages").add({
      msg,
      photo: user.photoURL,
      username: user.displayName,
      email: user.email,
      currentTime: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setuser(user);
      setloader(false);
    });
    // fetch messages from firestore
    db.collection("messages")
      .orderBy("currentTime", "desc")
      .onSnapshot((snp) => {
        setAllmsg(snp.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
  }, []);
  console.log(allMsg);
  return (
    <ContextProvider.Provider
      value={{ register, user, loader, logout, sendMessage,allMsg}}
    >
      {props.children}
    </ContextProvider.Provider> 
  );
};
