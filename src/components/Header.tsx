import React, { useEffect, useState } from "react";
import "./Header.scss";
import logo from "../assets/images/logo.png";
import avatar from "../assets/images/avatar.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdLogout, MdAdd, MdLogin } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { UserAuth } from "../Authcontext/Authcontext";
import { UserValue } from "../context/StateProvider";

const Header = () => {
  const [show, setShow] = useState(false);
  const [user, dispatch] = UserValue();
  const [menu, setMenu] = useState(false);
  const { googleSignIn, logout } = UserAuth();
  const handleSignIn = async () => {
    try {
      await googleSignIn();
      setMenu(false);
    } catch (error) {}
  };
  const handleLogout = async () => {
    try {
      await logout();
      setMenu(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleMenu = () => {
    setMenu((prev) => !prev);
  };
  useEffect(() => {
    console.log(user);
  }, [user]);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      //   window.removeEventListener("scroll");
    };
  }, []);
  return (
    <header className={`header ${show && " scroll"}`}>
      <Link to={"/"} className="header_logo">
        <img src={logo} alt="logo" />
        <p className="header_logo_text">Food Delivery</p>
      </Link>
      <div className="links">
        <motion.ul
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
        >
          <li>Home</li>
          <li>Menu</li>
          <li>Services</li>
        </motion.ul>
        <div className="shopping_card">
          <AiOutlineShoppingCart />
          <div className="shopping_card_number">
            <p>2</p>
          </div>
        </div>
        <div className="avatar" onClick={handleMenu}>
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user.user ? user.user.photoURL : avatar}
            alt="avatar"
          />
          {menu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="avatar_dropdown"
            >
              {user && user?.user?.email === "beresik.ales@gmail.com" ? (
                <p>
                  New item <MdAdd style={{ color: "black" }} />
                </p>
              ) : null}
              {user && user.user !== null ? (
                <p onClick={handleLogout}>
                  Logout <MdLogout />
                </p>
              ) : (
                <p onClick={handleSignIn}>
                  Login <MdLogin />
                </p>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
