
import { createRoot } from "react-dom/client";
import './views/welcome/index.css';

import Welcometoshriram from "./views/welcome/welcome.js";

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <Welcometoshriram />
  </>
);
