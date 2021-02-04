import React, { createContext, useState, useEffect } from "react";
import firebase from "../firebase/firebase";

export const LoginContext = createContext();

const LoginContextProvider = props => {
  const auth = firebase.auth();
  const db = firebase.firestore();

  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [regname, setRegname] = useState("");
  const [regemail, setRegemail] = useState("");
  const [regpassword, setRegpassword] = useState("");
  const [regpassword2, setRegpassword2] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [myBookmarkedRecipies, setMyBookmarkedRecipes] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  //register user with email, name, psw to firebase and login
  const sendRegistration = e => {
    e.preventDefault();
    //check if same psw was given both times at registration
    if (regpassword === regpassword2) {
      auth
        .createUserWithEmailAndPassword(regemail, regpassword)
        .then(function(result) {
          updateProfile(result.user);
        })
        .catch(function(error) {
          setErrorMessage(error.message);
        });
    } else {
      setErrorMessage("passwords don't match");
    }
  };

  const updateProfile = user => {
    user
      .updateProfile({
        displayName: regname
      })
      .then(() => {
        // after updating profile you need to manually set the name and userId because the function onAuthStateChanged
        //is not waiting for the profile to be updated and it runs before you add the displayName
        const currentUser = auth.currentUser;
        setIsLoggedIn(true);
        setName(currentUser.displayName);
        setUserId(currentUser.uid);
      })
      .catch(function(error) {
        console.log("error", error);
      });
  };
  //check user status, if no user logged in, it returns null
  auth.onAuthStateChanged(user => {
    if (user) {
      setIsLoggedIn(true);
      //get name of user, and save it
      setName(user.displayName);
      setUserId(user.uid);
    } else {
      setIsLoggedIn(false);
      setName("");
      setUserId("");
    }
  });

  const sendLogin = e => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(loginEmail, loginPassword)
      .then(cred => {
        console.log("signed in");
        //get the id of the recipes the user bookmarked
        // db.collection('users').doc(cred.user.uid).get()
        // .then(doc=>setMyBookmarkedRecipes(doc.data().myrecipes));
      })
      .catch(err => setErrorMessage(err.message));
  };

  const signOut = e => {
    e.preventDefault();
    firebase.auth().signOut();
  };

  //create a doc with the id = userId, and add recipeId inside
  const sendUserData = () => {
    console.log("sending to firebase");
    if (userId) {
      db.collection("users")
        .doc(userId)
        .set({
          myrecipes: myBookmarkedRecipies
        });
    }
  };

  const getMyBookmarkedRecipes = user => {
    db.collection("users")
      .doc(user)
      .get()
      .then(doc => setMyBookmarkedRecipes(doc.data().myrecipes));
    console.log("got recipes");
  };

  return (
    <LoginContext.Provider
      value={{
        getMyBookmarkedRecipes,
        errorMessage,
        myBookmarkedRecipies,
        setMyBookmarkedRecipes,
        signOut,
        sendLogin,
        loginEmail,
        setLoginEmail,
        loginPassword,
        setLoginPassword,
        sendRegistration,
        name,
        userId,
        setName,
        isLoggedin,
        setIsLoggedIn,
        regname,
        setRegname,
        regemail,
        setRegemail,
        regpassword,
        setRegpassword,
        regpassword2,
        setRegpassword2,
        sendUserData
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
