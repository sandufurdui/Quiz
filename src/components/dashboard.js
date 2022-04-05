import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import "../style/dashboard.css";
import { auth, db, logout } from "../firebase";
import Navbar from "./navbar"
import Login from "./login"

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  // const [name, setName] = useState("");
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
        <div className="">
          <Navbar />
          <>this is dashbrd component</>
        </div>
      ) : (
        <div>
          
        </div>
      )}
    </div>
  );
}
export default Dashboard;