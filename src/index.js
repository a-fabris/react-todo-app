import { createRoot } from "react-dom/client";
import TodoApp from "./TodoApp";
import "./main.css";
// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById("app"));
root.render(
  <div className="h-full bg-[#171717]">
    <TodoApp />
  </div>
);
