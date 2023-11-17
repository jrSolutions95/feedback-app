/* import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

ReactDOM.render(<React.StrictMode><App />
    </React.StrictMode>, document.getElementById("root")); */
    
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const root = document.getElementById("root");
const reactRoot = createRoot(root);
reactRoot.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
); 

/* run npm start to start application in vscode terminal */


    
    