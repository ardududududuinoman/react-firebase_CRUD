import { Route, Routes } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import Create from "./components/Create";
import Update from "./components/Update";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Mainpage />} />
      </Routes>
    </div>
  );
}

export default App;
