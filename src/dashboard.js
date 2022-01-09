import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import "./dashboard.css";
import { auth, db, logout } from "./firebase";
function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const history = useNavigate();
  // const fetchUserName = async () => {
  //   try {
  //     // const query = await db
  //     //   .collection("users")
  //     //   .where("uid", "==", user?.uid)
  //     //   .get();
  //     const data = await query.docs[0].data();
  //     setName(data.name);
  //   } catch (err) {
  //     console.error(err);
  //     alert("An error occured while fetching user data");
  //   }
  // };
  useEffect(() => {
    if (loading) return;
    if (!user) return history("/");
    // fetchUserName();
  }, [user, loading]);
  
  return (
    <div className="dashboard">
      <div className="dashboard__container">
        Logged in as
        <div>{name}</div>
        <div>{user?.email}</div>
        <button role='submit' className="dashboard__btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
export default Dashboard;