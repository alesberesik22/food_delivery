import React from "react";
import "./Message.scss";
import { motion } from "framer-motion";

const Message = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -200 }}
      className="message red"
    >
      Message
    </motion.div>
  );
};

export default Message;
