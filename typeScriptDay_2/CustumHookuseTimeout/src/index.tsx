import { createRoot } from "react-dom/client";
import TimeOutinterval from "./Components/Timeinterval";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(<TimeOutinterval />);
