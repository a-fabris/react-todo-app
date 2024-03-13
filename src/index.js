import { createRoot } from "react-dom/client";
import TodoApp from "./TodoApp";
// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById("app"));
root.render(
  <>
    <h1>Hello todo list!</h1>
    <TodoApp />
  </>
);
