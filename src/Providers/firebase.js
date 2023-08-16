import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


// Initialize Firebase Variables Here
const app = firebase.initializeApp({
    apiKey: "AIzaSyAQOfj6_0O6FdqJ_QPX1T5Yw4Z8ioUnKlY",
    authDomain: "voice-samples-svar.firebaseapp.com",
    projectId: "voice-samples-svar",
    storageBucket: "voice-samples-svar.appspot.com",
    messagingSenderId: "1032697392063",
    appId: "1:1032697392063:web:9ce0f3cab03c4631f80f0a"
})

export const auth = app.auth()
export const db = app.firestore()
export const storage = app.storage()
