import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./navbar"
import "../style/login.css"
import axios from 'axios'

function Login() {
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [error, setError] = useState('');
  const [userId, setUserId] = useState(0)

  const [user, setUser] = useState(false);
  const history = useNavigate();
  if ((localStorage.getItem('user-info')) && (user)) {
    setUser(true)
  }

  let navigate = useNavigate();
  const submitHandler = (e) => {
    if (name == '' || surname == '') {
      setError('fields above are required')
    } else {
      e.preventDefault();
      const postData = { data: { name, surname } }
      axios.post('https://pure-caverns-82881.herokuapp.com/api/v54/users', postData,
        {
          headers: {
            "X-Access-Token": '3d12a947e8715b83faa99dd81a70bcbfdcb7871c5c77a633a07253b7d6edd2be',
          }
        })
        .then((res) => {
          console.log(res.data.id)
          postData.data.id = res.data.id
          setUserId(res.data.id)

          localStorage.setItem("user-info", res.data.id);
          navigate('/dashboard')

        })
        .catch((err) => {
          console.log(err)
          setError('User already exists!');

        })
    }
  }

  return (
    <>{user ? (
      <div className="">
      </div>
    ) : (
      <div className="main">
        <div className="login-div">
          <Navbar />
          <form className="form" onSubmit={submitHandler}>
            <h1>Log in</h1>
            <input type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)} />
            <input type="text"
              placeholder="surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)} />
            <input type="submit" className="login_button" value="Log in" />

          </form>
        </div>
      </div>
    )}
    </>
  )
}

export default Login;