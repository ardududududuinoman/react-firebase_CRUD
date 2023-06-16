import { Route, Routes } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import Create from "./components/Create";
import Update from "./components/Update";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/create" element={<Create />} />
        <Route path="/Update" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
