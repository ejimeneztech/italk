import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Login from "./Pages/Login";


function App() {
  //create state to share with Login and Navbar
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    console.log(isAuthenticated);
  };

  useEffect(() => {
    console.log("isAuthenticated changed:", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <div className="App">
      <Navbar isLoggedIn={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Login onLoginSuccess={handleLogin}/>} />
        <Route path="/Home" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
