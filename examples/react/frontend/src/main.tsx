import "./index.css";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation.tsx";
import App from "./App.tsx";
import CardHandler from "./CardHandler.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cards" element={<CardHandler />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
