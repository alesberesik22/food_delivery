import React from "react";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "./Fruits.scss";
import FruitsContainer from "./FruitsContainer";

const Fruits = () => {
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
          >
            <MdChevronLeft className="arrow" />
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.2 }}
            className="fruits_header_scroll_right"
          >
            <MdChevronRight className="arrow" />
          </motion.div>
        </div>
      </div>
      <FruitsContainer flag={true} />
    </section>
  );
};

export default Fruits;
