import React from 'react';
import { FiSearch, FiHeart, FiShoppingCart } from 'react-icons/fi';
import { Link } from "react-router-dom"
//
import "./styles.scss"
import Logo from "../../assets/logo.svg"

function TopBar() {
  return (
    <div className="topbar-wrapper">
      <div className="container">
        <div className="topbar">
          <Link to="/">
            <img src={Logo} alt="logo" className="topbar__logo"/>
          </Link>
          <div className="topbar__buttons">
            <div className="topbar__button">
              <FiSearch size="1.5rem"/>
            </div>
            <div className="topbar__button">
            <span className="topbar__button__counter">0</span>
              <FiHeart size="1.5rem"/>
            </div>
            <div className="topbar__button">
              <span className="topbar__button__counter">2</span>
              <FiShoppingCart size="1.5rem"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
