import React from "react";
import { createRoot } from "react-dom/client";
import PremiumInvitationPage from "./App.jsx";
import "./styles/InvitationPage.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PremiumInvitationPage />
  </React.StrictMode>
);
