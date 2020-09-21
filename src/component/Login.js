import React, {useState} from "react";
import * as firebase from "firebase";

function Login() {
    const [authError, setAuthError] = useState(null);

    const handleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .catch( err => {
                setAuthError(err)
            })
    }

    return (
        <div className="Login">
            <h1>Spear React Chat</h1>
            <button onClick={handleSignIn}>Sing In with Google</button>
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
