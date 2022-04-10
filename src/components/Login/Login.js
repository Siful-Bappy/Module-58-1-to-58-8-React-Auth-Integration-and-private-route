import React from "react";

const Login = () => {
  return (
    <div>
      <h2>This is login section</h2>
      <div>
        <button style={{margin: "20px", padding: "10px 20px", borderRadius: "10px", border: "doted"}}>Google Sign In</button>
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
