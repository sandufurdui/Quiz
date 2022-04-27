import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import "../style/dashboard.css";
import { auth, db, logout } from "../firebase";
import Navbar from "./navbar"
import Card from "./quizCard"
import axios from 'axios'

function Dashboard() {
  const [user, setUser] = useState(true);
  const history = useNavigate();
  const [quizzes, setQuizzes] = useState([]);
  const [userId, setUserId] = useState("");

  const fetchQuizzes = async () => {
    const { data } = await axios.get('https://pure-caverns-82881.herokuapp.com/api/v54/quizzes',
      {
        headers: {
          "X-Access-Token": '3d12a947e8715b83faa99dd81a70bcbfdcb7871c5c77a633a07253b7d6edd2be',
        }
      });
    const quizzes = data;
    setQuizzes(quizzes);
    // console.log(quizzes);
    // console.log(quizzes.questions_count)
  };

  useEffect(() => {
    setUserId(localStorage.getItem("user-info"))
    if (!user) return history("/login");
    fetchQuizzes();
  }, [user]);


  return (
    <div>
      {user ? (
        <div className="homepage_main">
          <div className="navbar_container">
            <Navbar />
          </div>
          <div className="main_container">
            <div className="row">
              {quizzes.map(quiz => (
                // <Link to={`/quizzes/${quiz.id}`}>
                <>
                  <Card id={quiz.id} />
                  {/* <div className='quiz' key={quiz.id} >
                    <h2 className="titlee">Quiz</h2>
                    <p className="title">Title: {quiz.title}</p>
                    <p className="title">Question count: {quiz.questions_count}</p>

                    <input type="button" className="start-quiz" value="Start quiz" />
                  </div> */}

                </>
              ))}
              {/* <Card id={1} /> */}
            </div>
          </div>
        </div>

      ) : (
        null
      )}
    </div>
  );
}
export default Dashboard;