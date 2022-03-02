import React, { useEffect, useState } from 'react';
import initilizeFirebase from '../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, getIdToken } from "firebase/auth";

initilizeFirebase();
const useFirebase = () => {
    const [user,setUser] = useState({})
    const [error,setError] = useState('')
    const [isLoading,setIsLoading] = useState(true)
    const [admin,setAdmin] = useState('false')
    const [token,setToken] = useState('')

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
        //   insert user info to mongo db and pass the method to reuse the function also for PUT Api
        createUserAcc(email,name,'POST')
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
            // 
            createUserAcc(user.email,user.displayName,'PUT')
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
              // verifying using jwt token from here because observer will check what user doing
              getIdToken(user)
              .then(idToken => {
                setToken(idToken)
              } )
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

    // now can reused this func. if method post pass then insert data and if user are new try to login then insert data if exists just he'll login
    const createUserAcc = (email,name,method) => {
        const userData = {email,name}
        fetch('http://localhost:5000/users', {
            method: method,
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

    // to check login user is admin or not. If not admin so that we can limit access
    useEffect(()=>{
      fetch(`http://localhost:5000/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
    },[user.email])
    // I added dependency so that, if somehow email change so that can fetch data according to this email

    return {
        usingGoogleSignin,user,error,logOut,userRegistration,isLoading,userLogin,usingGithubSignin,admin,token
    };
};

export default useFirebase;