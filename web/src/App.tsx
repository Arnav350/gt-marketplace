import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Component imports
import Home from "./screens/Home";
import Pricing from "./screens/Pricing";
import AboutUs from "./screens/AboutUs";
import AuthModal from "./components/AuthModal";
import MobileNav from "./components/MobileNav";

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authType, setAuthType] = useState<"login" | "signup">("login");
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const openModal = (type: "login" | "signup") => {
    setAuthType(type);
    setShowAuthModal(true);
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-brand">
              <span className="brand-icon">📦</span> GT PackUp
            </div>

            {/* Desktop Navigation - Updated order */}
            <div className="nav-links desktop-nav">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/pricing" className="nav-link">
                Pricing
              </Link>
              <Link to="/about" className="nav-link">
                About Us
              </Link>
              <div className="auth-buttons">
                <button onClick={() => openModal("login")} className="btn btn-secondary">
                  Login
                </button>
                <button onClick={() => openModal("signup")} className="btn btn-primary">
                  Sign Up
                </button>
              </div>
            </div>

            {/* Mobile Hamburger Button */}
            <button className="mobile-menu-btn" onClick={() => setIsMobileNavOpen(true)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>

        <MobileNav isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} onAuthClick={openModal} />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </main>

        {showAuthModal && <AuthModal type={authType} onClose={() => setShowAuthModal(false)} />}
      </div>
    </Router>
  );
}

export default App;
