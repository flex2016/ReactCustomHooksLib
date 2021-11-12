import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import TaskRoute from "./routes/TaskRoute/TaskRoute";
import SignupForm from "./routes/SignupForm/SignupForm";
function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Sign Up</Link>
            </li>
            <li>
              <Link to="/tasks">Tasks</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<SignupForm />} />
          <Route path="tasks/*" element={<TaskRoute />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
