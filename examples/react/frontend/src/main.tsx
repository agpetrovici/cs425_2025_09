import "./index.css";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App.tsx";
import CardHandler from "./CardHandler.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <CardHandler />
  </StrictMode>
);
