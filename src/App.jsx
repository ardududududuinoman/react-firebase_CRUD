import { Route, Routes } from "react-router-dom";
import Mainpage from "./component/Mainpage";
import Create from "./component/Create";
import Update from "./component/Update";
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
