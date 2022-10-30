import React from "react";
import "./Cart.scss";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import { BiMinus, BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";

const Cart = () => {
  return (
    <div className="cart_container">
      <div className="cart_header">
        <MdOutlineKeyboardBackspace className="cart_header_back" />
        <p className="cart_header_p">Cart</p>
        <p className="cart_header_clear">
          Clear <RiRefreshFill />
        </p>
      </div>
      <div className="cart_body">
        <div className="cart_body_order_items">
          <div className="cart_body_order_item">
            <div className="cart_body_order_item_image">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/fooddelivery-5a716.appspot.com/o/Images%2F1667036118950%20-%20f2.png?alt=media&token=d0462fed-e40b-45d3-90bc-cd15fa0ed7ce"
                alt="text"
              />
            </div>
            <div className="cart_body_order_item_description">
              <p className="cart_body_order_item_description_name">Chocolate</p>
              <p className="cart_body_order_item_description_price">
                <span>$</span> 15
              </p>
            </div>
            <div className="cart_body_order_item_count">
              <motion.div
                whileTap={{ scale: 0.6, color: "orangered" }}
                whileHover={{ scale: 1.2, color: "orangered" }}
                className="cart_body_order_item_count_minus"
              >
                <BiMinus />
              </motion.div>
              <p className="cart_body_order_item_count_number">10</p>
              <motion.div
                whileTap={{ scale: 0.6, color: "orangered" }}
                whileHover={{ scale: 1.2, color: "orangered" }}
                className="cart_body_order_item_count_add"
              >
                <BiPlus />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="cart_body_order_details">
          <div className="cart_body_order_details_price">
            <div className="cart_body_order_details_price_total">
              <p>Sub Total</p>
              <p>
                <span>$</span> 15
              </p>
            </div>
            <div className="cart_body_order_details_price_delivery">
              <p>Delivery</p>
              <p>
                <span>$</span>
                2.5
              </p>
            </div>
          </div>
          <div className="cart_body_order_details_total"></div>
          <div className="cart_body_order_details_button">
            <button>Check Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
