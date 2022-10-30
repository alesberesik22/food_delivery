import React from "react";
import "./Menucontainer.scss";
import { motion } from "framer-motion";
import { MdShoppingBasket } from "react-icons/md";

const Menucontainer = (props: { data: any; animation: {} }) => {
  console.log("data", props.data);
  return (
    <motion.div
      animate={props.animation}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="menu_items_container"
    >
      {props.data &&
        props?.data?.map((item: any, index: any) => (
          <div className="menu_items_container_item" key={index}>
            <div className="menu_items_container_item_image">
              <img src={item.imageURL} alt="title" />
            </div>
            <div className="menu_items_container_item_description">
              <div className="menu_items_container_item_description_buy">
                <motion.div whileTap={{ scale: 0.3 }} className="button">
                  <MdShoppingBasket style={{ color: "white" }} />
                </motion.div>
              </div>
              <div className="menu_items_container_item_description_text">
                <h5>{item.title}</h5>
                <p className="menu_items_container_item_description_text_calories">
                  {item.calories} Calories
                </p>
                <p className="menu_items_container_item_description_text_price">
                  <span style={{ color: "orangered", fontWeight: "500" }}>
                    $
                  </span>{" "}
                  {item.price}
                </p>
              </div>
            </div>
          </div>
        ))}
    </motion.div>
  );
};

export default Menucontainer;
