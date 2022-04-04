import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from "./navbar"
import "../style/login.css"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) history("/dashboard");
  }, [user, loading]);



  return (

    <div className="">
      <Navbar />
      <div className="form">
        <h3>Login Here</h3>

        <label>Username</label>
        <input
          type="text"
          placeholder="enter your username"
          value={email} onChange={(e) => setEmail(e.target.value)}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              signInWithEmailAndPassword(email + '@gmail.com', password)
            }
          }} />

        <label>Password</label>
        <input
          type="password"
          placeholder="enter your password"
          value={password} onChange={(e) => setPassword(e.target.value)}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              signInWithEmailAndPassword(email + '@gmail.com', password)
            }
          }} />

        <button className="login_button" onClick={() => signInWithEmailAndPassword(email + '@gmail.com', password)}>Log In</button>
      </div>
    </div>
  );
}
export default Login;