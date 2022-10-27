import React, { useEffect } from "react";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import { AuthContextProvider, UserAuth } from "./Authcontext/Authcontext";
import { Route, Routes } from "react-router-dom";
import CreateItem from "./pages/createitem/CreateItem";
import Protected from "./components/Protected";
import { UserValue } from "./context/StateProvider";
import { actionType } from "./context/Reducer";
import MainPage from "./pages/mainpage/MainPage";

function App() {
  const { getAllItems } = UserAuth();
  const [{ foodItems }, discpatch] = UserValue();

  const fetchData = async () => {
    await getAllItems().then((data: any) => {
      console.log(data);
      discpatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/createitem" element={<CreateItem />} />
        </Routes>
      </div>
    </AnimatePresence>
  );
}

export default App;
