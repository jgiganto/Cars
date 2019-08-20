import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./state";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "emotion-theming";
import { theme } from "./assets/styles";
import "./assets/styles/reset.css";
import "./assets/styles/global.module.css";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
