import React, { useEffect, useState } from 'react';
import initilizeFirebase from '../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

initilizeFirebase();
const useFirebase = () => {
    const [user,setUser] = useState({})
    const [error,setError] = useState('')

    const auth = getAuth();
    const googleprovider = new GoogleAuthProvider();
    const githubprovider = new GithubAuthProvider();

    //Authenticate Using Google Sign-In
    const usingGoogleSignin = (location,history) => {
        signInWithPopup(auth, googleprovider)
        .then((result) => {
            const user = result.user;
            setUser(user)
            // console.log(user)
            // where user want to go? find it and redirect to there if came direct login rediret to homepage
            const destination = location.state?.from || ''
            history.replace(destination)
        }).catch((error) => {
            setError(error)
        });

    }

     // observer check state change or not
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
              // User is signed out
              setUser({})
            }
          });
          return () => unsubscribed;
    },[])

    // sign out user,
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
          }).catch((error) => {
            setError(error.message)
    })
    }

    return {
        usingGoogleSignin,user,error,logOut
    };
};

export default useFirebase;