// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./Components/Create";
import Chat from "./Components/Chat";
import FreelancerProfile from "./Components/FreelancerProfile";
import SupportForm from "./Components/SupportForm";
import OpenDisputesGrid from "./Components/OpenDisputeGrid";
import ConflictResolutionForm from "./Components/ConflictResolutionForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/create" element={<Create />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/freelancerProfile" element={<FreelancerProfile />} />
        <Route path="/supportForm" element={<SupportForm />} />
        <Route path="/openDisputeGrid" element={<OpenDisputesGrid />} />
        <Route path="/conflictResolutionForm" element={<ConflictResolutionForm />} />
      </Routes>
    </Router>
  );
};

export default App;
