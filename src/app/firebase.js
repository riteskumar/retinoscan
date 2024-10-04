import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'


const firebaseConfig = {
    apiKey: "AIzaSyD2YvECFkeI9w3Ut8L4lbanr0E-WhA1-aM",
    authDomain: "retinoscan-auth.firebaseapp.com",
    projectId: "retinoscan-auth",
    storageBucket: "retinoscan-auth.appspot.com",
    messagingSenderId: "586964442769",
    appId: "1:586964442769:web:e49b54d38cd579987aa930"
};
const app = firebase.initializeApp(firebaseConfig);
export const authentication = firebase.auth();