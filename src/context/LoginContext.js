import React, { createContext, useState, useEffect } from 'react';
import firebase from '../firebase/firebase';

export const LoginContext = createContext();

const LoginContextProvider = (props) => {
  const auth = firebase.auth();
  const db = firebase.firestore();

  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [regname, setRegname] = useState('');
  const [regemail, setRegemail] = useState('');
  const [regpassword, setRegpassword] = useState('');
  const [regpassword2, setRegpassword2] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [myBookmarkedRecipies, setMyBookmarkedRecipes] = useState([]);

  //register user with email, name, psw to firebase and login
  const sendRegistration = e => {
      e.preventDefault();
      //check if same psw was given both times at registration
      if (regpassword === regpassword2) {
        auth.createUserWithEmailAndPassword(regemail, regpassword).then(function (result) {
          updateProfile(result.user)
        }).catch(function (error) {
          console.log(error);
        });
      } else {
        console.log('passwords dont match');
      }
    };
    const updateProfile = (user) => {
      user.updateProfile({
        displayName: regname,
      }).then(() => {
        // after updating profile you need to manually set the name and userId because the function onAuthStateChanged
        //is not waiting for the profile to be updated and it runs before you add the displayName
        const currentUser = auth.currentUser
        setIsLoggedIn(true);
        setName(currentUser.displayName);
        setUserId(currentUser.uid);
      }).catch(function(error) {
        console.log('error', error)
      });
    }
  //check user status, if no user logged in, it returns null
  auth.onAuthStateChanged(user=> {
    console.log('user', user)
    if (user) {
      setIsLoggedIn(true);
      //get name of user, and save it
      setName(user.displayName);
      setUserId(user.uid);
    }else {
      setIsLoggedIn(false);
      setName('');
      setUserId('');
    }});

  const sendLogin = e => {
      e.preventDefault();
      auth.signInWithEmailAndPassword(loginEmail, loginPassword)
      .then(cred => {
        //get the id of the recipes the user bookmarked
        db.collection('users').doc(cred.user.uid).get().then(doc=>setMyBookmarkedRecipes(doc.data().myrecipes));
      });
    };

  const signOut = e => {
      e.preventDefault();
      firebase.auth().signOut();
    };

  //create a doc with the id = userId, and add recipeId inside
  const sendUserData = () => {
    if (userId) {
      db.collection('users').doc(userId).set({
        myrecipes: myBookmarkedRecipies,
      });}
  };

  useEffect(()=> {
    sendUserData();
  }, [myBookmarkedRecipies]);

  return (
    <LoginContext.Provider value={{ myBookmarkedRecipies, setMyBookmarkedRecipes, signOut, sendLogin,  loginEmail, setLoginEmail, loginPassword, setLoginPassword, sendRegistration, name, userId, setName, isLoggedin, setIsLoggedIn, regname, setRegname, regemail, setRegemail, regpassword, setRegpassword, regpassword2, setRegpassword2 }}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
