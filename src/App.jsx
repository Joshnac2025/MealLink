import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import DonorDashboard from "./pages/DonorDashboard";
import OrphanageDashboard from "./pages/OrphanageDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import EventDashboard from "./pages/EventDashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CommunityDashboard from "./pages/CommunityDashboard";
import CampaignDetails from "./pages/CampaignDetails";
import Contribute from "./pages/Contribute";

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/donor" element={<DonorDashboard />} />
          <Route path="/orphanage" element={<OrphanageDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/events" element={<EventDashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/community" element={<CommunityDashboard />} />
          <Route path="/campaign/:id" element={<CampaignDetails />} />
          <Route path="/contribute" element={<Contribute />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}