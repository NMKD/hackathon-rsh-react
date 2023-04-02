import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import "./assets/css/index.css";
import store from "./store/createStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
