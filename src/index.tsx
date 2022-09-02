import React from "react";
import ReactDOM from "react-dom";
import store from "./store/Store";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Initialize languages
import "./locales/i18n";
import "antd/dist/antd.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// Hot reloadable translation json files
if ((module as any).hot) {
  (module as any).hot.accept(["./locales/i18n"], () => {
    // No need to render the App again because i18next works with the hooks
  });
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
