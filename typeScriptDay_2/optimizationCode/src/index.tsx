import { createRoot } from "react-dom/client";
import CountingApp from "../src/Components/CountingApp";
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(<CountingApp />);
