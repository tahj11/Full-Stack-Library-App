import "./App.css";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Home />
      {/* <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes> */}
    </div>
  );
}

export default App;
