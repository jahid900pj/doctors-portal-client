// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: "AIzaSyD1SuVBfIa-puhp4oJ5Gv5PIL5rCHleQkU",
    // authDomain: "doctors-portal-cef3b.firebaseapp.com",
    // projectId: "doctors-portal-cef3b",
    // storageBucket: "doctors-portal-cef3b.appspot.com",
    // messagingSenderId: "71577999100",
    // appId: "1:71577999100:web:df3601885a9d1480fca979"

    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;