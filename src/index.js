import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/createStore";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <App />
);
