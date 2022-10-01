    const auth_fun = (auth, signInWithEmailAndPassword,
    signInWithPopup,GoogleAuthProvider) => {

        const loginForm = document.querySelector('.login100-form');

        const g_signin = document.querySelector('.g_signin');




    //1. Login functionality
        loginForm.addEventListener('submit', e => {
            e.preventDefault();
            const em = loginForm.email.value;
            const password = loginForm.password.value;

            signInWithEmailAndPassword(auth,em,password)
            .then(cred=>{
                console.log(cred);
                window.location.href = "./verbs.html";  
            })
            .catch(err=>console.log("Error:",err.message));

        });
    //2. Google Sign-in/Create-Account
        g_signin.addEventListener('click', e => {
            e.preventDefault();
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                window.location.href = "./verbs.html";  
                const token = credential.accessToken;
                 // The signed-in user info.
                const user = result.user;
                 // ...
            }).catch((error) => {
                window.alert("There was an error logging in. Please double-check your email and password.")
                // Handle Errors here.
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // // The email of the user's account used.
                // const email = error.email;
                // // The AuthCredential type that was used.
                //  const credential = GoogleAuthProvider.credentialFromError(error);
                 // ...
         });
        })};



    

    // 3. Create new account (for createaccount.html)
    const createaccount_fun = (auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,
        signInWithPopup,GoogleAuthProvider) => {
        console.log('CREATEFORM ACTIVE');
            
        const createForm = document.querySelector('.login100-formCA');
        const g_signin = document.querySelector('.g_signin');

    
        //1. Create account manually with email and password
        createForm.addEventListener('submit',(e)=>{    
            e.preventDefault();
            
        
            const em = createForm.email.value;
            const pw = createForm.password.value;
        
            createUserWithEmailAndPassword(auth,em,pw)
            .then(cred => {
                window.location.href = "./verbs.html";    
            })
            .catch(err=>console.log(err.message));
        });
    
        //2. Sign in with google popup
        g_signin.addEventListener('click', e => {
    

            e.preventDefault();
    
            const provider = new GoogleAuthProvider();
    
    
            signInWithPopup(auth, provider)
            .then((result) => {
    
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                window.location.href = "./verbs.html";  
                const token = credential.accessToken;
                 // The signed-in user info.
                const user = result.user;
                 // ...
            }).catch((error) => {
                console.log(error.message);
                // Handle Errors here.
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // // The email of the user's account used.
                // const email = error.email;
                // // The AuthCredential type that was used.
                //  const credential = GoogleAuthProvider.credentialFromError(error);
                 // ...
         });
        });
    
    };

 //4. Reset password
 const reset_fun = (auth, sendPasswordResetEmail) => {

    const resetForm = document.querySelector('.login100-formReset');

    resetForm.addEventListener('submit',(e)=>{    
        e.preventDefault();
        
        const em = resetForm.email.value;

       sendPasswordResetEmail(auth,em)
        .then(()=>{
            resetForm.innerHTML = '<span class="login100-form-title p-b-49">Reset Email Successfully Sent! <br> Check your spam if you don\'t see it right away.</span>';
        })
        .catch(err=>window.alert(err.message));

    
    });
};


export {auth_fun, createaccount_fun, reset_fun};