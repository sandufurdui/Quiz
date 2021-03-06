import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../firebase";
import Dashboard from "./dashboard"
import Login from './login'
import Main from "./main"
import About from "./about"
import Music from "./musicPlayer"
import "../style/navbar.css"

function Navbar({ logged }) {
    const [user] = useAuthState(auth);
    return (
        <div className="navbar_container">
            <ul className="menu-bar">
                <Link className="link"  to="/">Home</Link>
                <Link className="link"  to="/about">About</Link>
                {/* <Link className="link" component={Dashboard} to="/dashboard">Dashboard1</Link> */}
                {user ? <Link className="link"  to="/dashboard">Dashboard</Link> :
                    <Link className="link"  to="/login">Log In</Link>}
                {user ? <button className="link" onClick={logout}><span >Log Out</span></button> : null}
                <Music />
            </ul>
        </div>
    )
}



export default Navbar