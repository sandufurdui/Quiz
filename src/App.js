
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login";
// import Register from "./register";
// import Reset from "./reset";
import Dashboard from "./dashboard";
import Main from "./main.js"
// import Test from './test'
function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Main />}></Route>
          <Route path="/login" element={<Login />}></Route>
          {/* <Route path="/register" element={<Register />}></Route> */}
          {/* <Route path="/reset" element={<Reset />}></Route> */}
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
