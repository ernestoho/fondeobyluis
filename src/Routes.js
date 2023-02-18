import React from "react";
import AccountDetails from "pages/AccountDetails";
import AccountDetailsOne from "pages/AccountDetailsOne";
import Desktop from "pages/Desktop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Desktop />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/accountdetailsone" element={<AccountDetailsOne />} />
        <Route path="/accountdetails" element={<AccountDetails />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
