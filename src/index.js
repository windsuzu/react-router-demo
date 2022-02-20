import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    // Fix the routing of gh-pages by adding basename
    // https://medium.com/@Dragonza/react-router-problem-with-gh-pages-c93a5e243819
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
