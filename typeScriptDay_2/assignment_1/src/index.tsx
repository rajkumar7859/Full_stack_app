import { createRoot } from "react-dom/client";
import Todo from "./Components/Todo";
import "../index.css";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(
  <div className="App">
    <Todo />
  </div>
);