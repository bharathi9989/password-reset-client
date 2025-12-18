import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ResetPasswordPage from "./pages/resetPasswordPage.jsx";
import ForgotPasswordPage from "./pages/forgotPasswordPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/forgot-password" />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
