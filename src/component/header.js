import { useState } from "react";
import { Link } from "react-router-dom";
import app_logo from "../assets/img/logo_dish near me.png";
import { useSelector } from "react-redux";

const appLogo = (
  <a href="/">
  <img
    src={app_logo}
    alt="Applogo"
  />
  </a>
);

const Header = () => {
  const cartItems=useSelector(store=>store.cart.items);
  return (
  <div className="nav">
      <div className="logo_nav">
        {appLogo}
      </div>
      <div className="items_nav"> 
          <div className="container">
            <div className="title"><h3 className="hover"><Link to="/">Home</Link></h3> </div>
          </div>
          <div className="container">
             <div className="title"><h3 className="hover"><Link to="/login">SignIn</Link></h3></div>
          </div>
          <div className="container">
             <div className="title"><h3 className="hover"><Link to="/contact">Contact</Link></h3></div>
          </div>
          <div className="container">
             <div className="title"><h3 className="hover headerErrorCss"><Link to="/cart">Cart[{cartItems.length}]</Link></h3></div>
          </div>

      </div>    
  </div>);
};

export default Header;
