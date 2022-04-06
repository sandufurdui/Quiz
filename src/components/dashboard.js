import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import "../style/dashboard.css";
import { auth, db, logout } from "../firebase";
import Navbar from "./navbar"
import Submit from "../hooks/submitQuiz"
import Get from "../hooks/getQuiz"
import Login from "./login"
import Test from "./test"
import AddCard from "./addQuizCard"

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  // const [name, setName] = useState("");
  const history = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) return history("/login");
  }, [
    user,
    loading
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
          <Submit id="1" />
          <Get id="1" />
        </div>

      ) : (
        <div>

        </div>
      )}
    </div>
  );
}
export default Dashboard;