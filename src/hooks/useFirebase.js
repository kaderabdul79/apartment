import React, { useEffect, useState } from 'react';
import initilizeFirebase from '../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

initilizeFirebase();
const useFirebase = () => {
    const [user,setUser] = useState({})
    const [error,setError] = useState('')
    const [isLoading,setIsLoading] = useState(true)


    const auth = getAuth();
    const googleprovider = new GoogleAuthProvider();
    const githubprovider = new GithubAuthProvider();

    //Create a password-based account register 
    const userRegistration = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setError('')
        //   to show the name,email after user registered
          const newUser = {email,displayName:name}
          setUser(newUser)
        //   insert user info to mongo db
        createUserAcc(email,name)
        // send name to firebase after creation
            updateProfile(auth.currentUser, {
                    displayName: name
            }).then(() => {
        }).catch((error) => {
    });
    //   after registered url replace to home
        history.replace('/')
        })
    .catch((error) => {
    //   const errorMessage = error.message;
        setError(error)
        console.log(error.message)
    })
    .finally(() => {
        setIsLoading(false)
    });
    }
    
    // Sign in a user with an email address and password
    const userLogin = (email, password,location,history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location.state?.from || ''
            history.replace(destination)
          // Signed in 
          const user = userCredential.user;
          setUser(user)
          setError('')
        })
        .catch((error) => {
        //   const errorMessage = error.message;
          setError(error)
        })
        .finally(() => {
            setIsLoading(false)
        });
    }

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

    //Authenticate Using Github Sign-In
    const usingGithubSignin = (location,history) => {
        setIsLoading(true)
        signInWithPopup(auth, githubprovider)
        .then((result) => {
            const user = result.user;
            setUser(user)
            // console.log(user)
            const destination = location.state?.from || ''
            history.replace(destination)
        }).catch((error) => {
            setUser(error)
            // console.log(email)
        }).finally(() => {
            setIsLoading(false)
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
            setIsLoading(false)
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

    // 
    const createUserAcc = (email,name) => {
        const userData = {email,name}
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
          })
    }

    return {
        usingGoogleSignin,user,error,logOut,userRegistration,isLoading,userLogin,usingGithubSignin
    };
};

export default useFirebase;