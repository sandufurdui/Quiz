import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Dashboard from "./dashboard"
import Login from './login'
import Main from "./main"
import About from "./about"
import Music from "./musicPlayer"
import "../style/navbar.css"

function Navbar() {
    return (
        <div className="navbar_container">
            <ul className="menu-bar">
                {/* <Link className="link"  to="/">Home</Link> */}
                <Link className="link" to="/about">About</Link>
                {/* <Link className="link" component={Dashboard} to="/dashboard">Dashboard1</Link> */}
                <Link className="link" to="/dashboard">Dashboard</Link>
                <Link className="link" to="/login">Log In</Link>

                <Music />
            </ul>
        </div>
    )
}



export default Navbar