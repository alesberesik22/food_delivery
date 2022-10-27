import React from "react";
import Fruits from "../Fruits/Fruits";
import Info from "../Info/Info";
import "./MainPage.scss";

const MainPage = () => {
  return (
    <div className="main_page">
      <Info />
      <Fruits />
    </div>
  );
};

export default MainPage;
