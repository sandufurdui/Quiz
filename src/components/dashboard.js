import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import "../style/dashboard.css";
import { auth, db, logout } from "../firebase";
import Navbar from "./navbar"
import Login from "./login"
import AddCard from "./addQuizCard"

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const history = useNavigate();

  useEffect(() => {
    // if (loading) return;
    if (!user) return history("/login");
  }, [
    user,
    // loading
  ]);


  return (
    <div>
      {user ? (
        <div className="homepage_main">
          <div className="navbar_container">
            <Navbar />
          </div>
          <div className="main_container">
            <div className="row">
              <div className="grid-item">
                <AddCard />
              </div>
              {/* <div className="grid-item">
                <AddCard />
              </div>
              <div className="grid-item">
                <AddCard />
              </div> */}
              {/* <div className="grid-item">
                <AddCard />
              </div> */}
            </div>
          </div>
          {/* <Submit id="lol" /> */}
          {/* <Get id="second" /> */}
        </div>

      ) : (
       null
      )}
    </div>
  );
}
export default Dashboard;