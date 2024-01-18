import { createRoot } from "react-dom/client";
import { Prelude } from "./Prelude";

const root = createRoot(document.getElementById("app")!);
root.render(<Prelude />);
