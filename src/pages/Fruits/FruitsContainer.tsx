import React from "react";
import "./FruitsContainer.scss";

const FruitsContainer = (props: { flag: boolean }) => {
  return <div className="fruits_row_container">{props.flag}</div>;
};

export default FruitsContainer;
