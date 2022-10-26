import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from "./context/StateProvider";
import { InitialState } from "./context/InitialState";
import reducer from "./context/Reducer";
import { AuthContextProvider } from "./Authcontext/Authcontext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Router>
    <StateProvider initialState={InitialState} reducer={reducer}>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </StateProvider>
  </Router>
);
