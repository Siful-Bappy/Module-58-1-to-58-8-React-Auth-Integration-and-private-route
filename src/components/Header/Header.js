import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth, signOut } from "firebase/auth";
import app from "../../firebase.init";

const auth = getAuth(app)

const Header = () => {
  const [user] = useAuthState(auth)
  // old style
  // const {user, handleSignOut} = useFirebase();
  return (
    <div className="header">
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/register">Register</Link>
        {
          user && 
          <Link to="/vip">VIP</Link>
        }
        <Link to="/about up">About us</Link>
        <span>{user?.displayName && user.displayName}</span>
        {
          user?.uid ? 
          <button onClick={() => signOut(auth)}>Sign out</button>
          // <button onClick={handleSignOut}>Sign out</button>
          :
          <Link to="/login">Login</Link>
        }
      </nav>
    </div>
  );
};

export default Header;
