import React, {useState} from "react";
import * as firebase from "firebase";

function Login() {
    const [authError, setAuthError] = useState(null);

    const handleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .catch(err => {
                setAuthError(err)
            })
    }

    return (
        <div className="Login">
            <p className='Logo'>React Chat App</p>
            <div onClick={handleSignIn} className="google-btn">
                <div className="google-icon-wrapper">
                    <img className="google-icon"
                         src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                </div>
                <p className="btn-text"><b>Sign in with google</b></p>
            </div>
            {authError && (
                <div>
                    <p>Sorry, there was a problem</p>
                    <p>
                        <i>{authError.message}</i>
                    </p>
                    <p>Please try again</p>
                </div>
            )}
        </div>
    )
}

export default Login;
