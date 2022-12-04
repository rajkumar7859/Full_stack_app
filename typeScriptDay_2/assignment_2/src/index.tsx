import { createRoot } from "react-dom/client";
import Counter from "./Components/Counter";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(<Counter />);
