import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Loginn from "./pages/Loginn";
import Home from "./pages/Home";
import Register from "./pages/Register";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Loginn />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
