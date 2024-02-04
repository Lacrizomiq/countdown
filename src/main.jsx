import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Countdown from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Countdown />
  </StrictMode>
);
