import React from "react";
import ReactDOM from "react-dom";
import styles from "./global.style";
import reportWebVitals from "./reportWebVitals";
import theme from "./Modules/Theme";
import App from "./pages/App";
import { Application } from "react-rainbow-components";
import { r } from "../../react-hyper/dist/index";

ReactDOM.render(
  r(
    Application,
    {
      className: `fixed flex overflow-hidden ${styles()}`,
      theme: theme("dark"),
    },
    [r(React.Fragment, [r(App)])]
  ),
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
