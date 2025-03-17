import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import ItemsScreen from "./screens/ItemsScreen";
import ServicesScreen from "./screens/ServicesScreen";
import UsersScreen from "./screens/UsersScreen";
import MessagesScreen from "./screens/MessagesScreen";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/items" element={<ItemsScreen />} />
          <Route path="/services" element={<ServicesScreen />} />
          <Route path="/users" element={<UsersScreen />} />
          <Route path="/messages" element={<MessagesScreen />} />
          <Route path="/" element={<Navigate to="/items" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
