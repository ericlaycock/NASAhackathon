// 1. Import all global functions
import {auth_fun,createaccount_fun, reset_fun} from './page_funs/auth';

// 2. Import and initialize global firebase functionality
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth,createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signInWithPopup, GoogleAuthProvider,
    onAuthStateChanged,sendPasswordResetEmail} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCS5E0sntq5dN0g7FlW0B69dhwJp_3f-b8",
  authDomain: "app.pineapplespanish.com",
  projectId: "pineapplespanish-ff90a",
  storageBucket: "pineapplespanish-ff90a.appspot.com",
  messagingSenderId: "237714081439",
  appId: "1:237714081439:web:2d1130801f978c4fe8c4aa",
  measurementId: "G-T0PYJE03ZZ"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


// 3. If current pathname is <name>, trigger that page's functionality
// whenever DOMContent is loaded (on page refresh or when new page is loaded)

const path = window.location.pathname;

onAuthStateChanged(auth,user=>console.log("User updated: ",user));

window.addEventListener('DOMContentLoaded', () => {


// For index.html, run the auth_fun(). Every other page has seperate functionality.
    if (path.includes("index.html") || path==="/"){

      //call imported auth_fun
        auth_fun(auth,
            signInWithEmailAndPassword,
            signInWithPopup,GoogleAuthProvider);

    }
    // Conditionally import and execute page-specific functions (faster page load if conditional import)

    else if(path.includes("createaccount.html")){
        
        createaccount_fun(auth,createUserWithEmailAndPassword,
            signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider);
    }

    else if(path.includes("forgot.html")){
       
        reset_fun(auth,sendPasswordResetEmail);
    }

    else if (path.includes("verbs.html")){

        import('./page_funs/verbs')
        .then(module => module.verb_fun())
        .catch(err=>console.log(err.message));
    }
    else if (path.includes("memory.html")){
        import('./page_funs/memory')
        .then(module=>module.memory_fun())
        .catch(err=>console.log(err));
    }
    else if (path.includes("pron.html")){
        import('./page_funs/pron')
        .then(module=>module.pron_fun())
        .catch(err=>console.log(err));
    }


});








