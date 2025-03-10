import React from "react";
import { Link } from "react-router-dom";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthClick: (type: "login" | "signup") => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose, onAuthClick }) => {
  return (
    <>
      <div className={`mobile-nav-overlay ${isOpen ? "active" : ""}`} onClick={onClose} />
      <div className={`mobile-nav ${isOpen ? "active" : ""}`}>
        <div className="mobile-nav-header">
          <div className="nav-brand">
            <span className="brand-icon">📦</span> GT PackUp
          </div>
          <button className="close-nav" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="mobile-nav-links">
          <Link to="/" className="mobile-nav-link" onClick={onClose}>
            Home
          </Link>
          <Link to="/about" className="mobile-nav-link" onClick={onClose}>
            About Us
          </Link>
          <Link to="/pricing" className="mobile-nav-link" onClick={onClose}>
            Pricing
          </Link>
        </div>

        <div className="mobile-nav-auth">
          <button
            className="btn btn-secondary"
            onClick={() => {
              onAuthClick("login");
              onClose();
            }}
          >
            Login
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              onAuthClick("signup");
              onClose();
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
