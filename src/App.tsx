import React from "react";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import { AuthContextProvider } from "./Authcontext/Authcontext";
import { Route, Routes } from "react-router-dom";
import Info from "./pages/Info/Info";
import CreateItem from "./pages/createitem/CreateItem";
import Protected from "./components/Protected";

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <AuthContextProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Info />} />
            <Route path="/createitem" element={<CreateItem />} />
          </Routes>
        </div>
      </AuthContextProvider>
    </AnimatePresence>
  );
}

export default App;
