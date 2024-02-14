import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import cart from "../assets/cart.svg";
import logo from "../assets/logo.webp";
import menu from "../assets/menu.svg";
import "../styles/header.css";
export const Header = () => {
  const [open, setOpen] = useState(false);
  const nav = useNavigate()
  return (
    <React.Fragment>
      <header className="header-cnt">
        <div className="logo-cnt">
          <label>
            <img src={logo} alt="" onClick={() => {nav('/')}} />
          </label>
        </div>
        <div
          className="menu-mobile"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <img src={menu} alt="" />
        </div>
        <div className="links-cnt">
         <Link to={'/'}>Inicio</Link>
          <a href="">
            {" "}
            <img src={cart} alt="carrito" />
          </a>
        </div>
      </header>{" "}
      <motion.header
        className="links-mobile"
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link to={'/'}>Inicio</Link>
        <label className="cart-label">
          <img src={cart} alt="" />
          <a href="">Ver carrito</a>
        </label>
      </motion.header>
    </React.Fragment>
  );
};
