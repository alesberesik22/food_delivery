import React from "react";
import "./FruitsContainer.scss";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";

const FruitsContainer = (props: { flag: boolean; data: [] }) => {
  return (
    <div className="fruits_row_container">
      {props.data &&
        props.data.map((foodItem: any, index) => (
          <div className="fruit_row_item" key={index}>
            <div className="fruit_row_item_img">
              <img src={foodItem.imageURL} alt="img" />
            </div>
            <div className="fruit_row_item_description">
              <div className="fruit_row_item_description_buy">
                <motion.div whileTap={{ scale: 0.3 }} className="button">
                  <MdShoppingBasket style={{ color: "white" }} />
                </motion.div>
              </div>
              <div className="fruit_row_item_description_text">
                <h5>{foodItem.title}</h5>
                <p className="fruit_row_item_description_text_calories">
                  {foodItem.calories} Calories
                </p>
                <p className="fruit_row_item_description_text_price">
                  <span style={{ color: "orangered", fontWeight: "500" }}>
                    $
                  </span>{" "}
                  {foodItem.price}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default FruitsContainer;
