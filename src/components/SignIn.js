import React from 'react';
import { signInWithPopup} from "firebase/auth";
import {auth, provider} from '../firebase-config'
import '../App.css';
import google_logo from '../imageAssests/google_logo.png'


// style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }
//{ <img className="googleLogo" src={google_logo} />} <span> <img className="googleLogo" src={google_logo} /> </span>


function SignIn() {
    

    const signInWithGoogle =  () => {
        signInWithPopup(auth,provider)
        };
    
    return (
        <div 
          
        
        >
            <button className="signInBtn" onClick={signInWithGoogle} >Sign In   </button>
        </div>
    )
}

export default SignIn