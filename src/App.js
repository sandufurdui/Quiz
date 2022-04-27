
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./unused comp/login";
import Dashboard from "./components/dashboard";
import Main from "./unused comp/main"
import About from "./unused comp/about"
function App() {
  return (
    <div>
      <Router>
        <Routes>
        {/* <Route path="/" element={<Main />}></Route> */}
          <Route path="/login" element={<Login />}></Route>
          {/* <Route path="/register" element={<Register />}></Route> */}
          {/* <Route path="/reset" element={<Reset />}></Route> */}
          <Route path="/about" element={<About />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
        {/* <Get id= "1" /> */}
      </Router>
    </div>
  );
}
export default App;
