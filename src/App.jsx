import { Link, Route, Routes } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Mainpage />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/LOGIN" element={<Login />} />
        {/* <Route exact path="Loginpage" element={<Login />} /> */}
      </Routes>
    </div>
  );
}

export default App;
