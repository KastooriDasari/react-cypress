import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import {useState,useEffect} from 'react';
import { onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCe3iegaScUPEeBMHfQhQqJOlCjFCdYE7Y",
  authDomain: "login-authentication-4c945.firebaseapp.com",
  projectId: "login-authentication-4c945",
  storageBucket: "login-authentication-4c945.appspot.com",
  messagingSenderId: "969316985179",
  appId: "1:969316985179:web:d424179d25d20c6f05d27e",
};
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export const ath = getAuth(firebaseApp);

const provider = new GoogleAuthProvider()
export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        console.log(result);
    })
        .catch((error) => {
            console.log(error);
        })
};
const fprovider = new FacebookAuthProvider()
export const sigInWithFacebook = () => {
    signInWithPopup(auth, fprovider).then((result) => {
        console.log(result);
    })
        .catch((error) => {
            console.log(error);
        })
};
export function useAuth(){
    const [currentUser,setcurrentUser] = useState();
    useEffect(() => {
      const unsub = onAuthStateChanged(auth,(user) => setcurrentUser(user))
      return unsub
    },[]);
    return currentUser;
   }

export { firebaseApp }