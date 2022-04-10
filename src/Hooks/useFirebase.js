import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.init";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({}); 

    const singInWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            setUser(user);
            console.log(user);
        })
        .catch(error => {
            console.log("Error", error);
        })
    }
    const handleSignOut = () => {
        signOut(auth)
        .then(() => {})
        .catch(error => {
            console.log("Error", error);
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    }, [])
    // return [user, setUser];
    return {
        user, singInWithGoogle, 
        handleSignOut
    }
}

export default useFirebase;