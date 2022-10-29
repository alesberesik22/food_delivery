import React from "react";
import Fruits from "../Fruits/Fruits";
import Info from "../Info/Info";
import Menu from "../Menu/Menu";
import "./MainPage.scss";

const MainPage = () => {
  return (
    <div className="main_page">
      <Info />
      <Fruits />
      <Menu />
    </div>
  );
};

export default MainPage;
