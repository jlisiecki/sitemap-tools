import { createRoot } from "react-dom/client";
import App from "./App";

const root = document.getElementById("root");
if (!root) throw "No root element found";
createRoot(root).render(<App />);
