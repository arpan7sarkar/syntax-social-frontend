import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import axios from "axios";
axios.defaults.withCredentials = true;
createRoot(document.getElementById("root")).render(
  //strict mode in developer mode makes 2 api calls in production makes 1 api call
  // <StrictMode>
  <App />
  // </StrictMode>,
);
