
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login";
// import Register from "./register";
// import Reset from "./reset";
import Dashboard from "./dashboard";
// import Test from './test'
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          {/* <Route path="/register" element={<Register />}></Route> */}
          {/* <Route path="/reset" element={<Reset />}></Route> */}
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
