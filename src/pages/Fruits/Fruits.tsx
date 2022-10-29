import React from "react";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "./Fruits.scss";
import FruitsContainer from "./FruitsContainer";
import { UserValue } from "../../context/StateProvider";

const Fruits = () => {
  const [{ foodItems }, dispatch] = UserValue();

  const scrollRight = () => {
    var slider = document.getElementsByClassName("fruits_row_container");
    slider[0].scrollLeft = slider[0].scrollLeft + 500;
  };
  const scrollLeft = () => {
    var slider = document.getElementsByClassName("fruits_row_container");
    slider[0].scrollLeft = slider[0].scrollLeft - 500;
  };
  return (
    <section className="fruits_container">
      <div className="fruits_header">
        <div className="fruits_header_text">
          <p>Our Fresh & Healthy Fruits</p>
        </div>
        <div className="fruits_header_scroll">
          <motion.div
            whileTap={{ scale: 0.2 }}
            className="fruits_header_scroll_left"
            onClick={scrollLeft}
          >
            <MdChevronLeft className="arrow" />
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.2 }}
            className="fruits_header_scroll_right"
            onClick={scrollRight}
          >
            <MdChevronRight className="arrow" />
          </motion.div>
        </div>
      </div>
      <FruitsContainer
        flag={true}
        data={foodItems?.filter((food: any) => food.category === "fruits")}
      />
    </section>
  );
};

export default Fruits;
