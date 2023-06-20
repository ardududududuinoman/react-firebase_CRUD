import { Link, Route } from "react-router-dom";
import { Router } from "react-router-dom";
import LoginPage from "../components/Login";

const Routeees = () => {
  return (
    <Router>
      <Link to="/loginpage" />
      <Route exact path="/loginpage" Component={<LoginPage />} />
    </Router>
  );
};
export default Routeees;
