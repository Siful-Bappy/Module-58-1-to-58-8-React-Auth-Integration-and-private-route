import { getAuth } from "firebase/auth";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";  
import app from "../../firebase.init";
import useFirebase from "../../Hooks/useFirebase";

const auth = getAuth(app);

const Login = () => {
    const [singInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    // custom one we use before 
    // const {singInWithGoogle} = useFirebase();
    // console.log(singInWithGoogle);
  return (
    <div>
      <h2>This is login section</h2>
      <div style={{margin: "20px", padding: "10px 20px", borderRadius: "10px", border: "doted"}}>
        <button onClick={() => singInWithGoogle()}>Google Sign In</button>
        {/* <button onClick={singInWithGoogle}>Google Sign In</button> */}
      </div>
      <form action="">
        <input type="email" name="" id="" placeholder="Your Email" />
        <br />
        <input type="password" name="" id="" placeholder="Your Password" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
