import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { IonIcon } from "@ionic/react";
import { menu } from "ionicons/icons";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [navbar, setNavbar] = useState(true);
  const [menuBar, setMenuBar] = useState(true);

  const backgroundChange = () => {
    if (window.scrollY < 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", backgroundChange);

  return (
    <>
      <div className={navbar ? "bg-wrapper" : "bg-wrapper active"}>
        <div className="container">
          <div className="wapper">
            <div className="imgLogo">
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="menu">
              <ul className={`listedmenu ${menuBar ? "active" : ""}`}>
                <li className="meanuItems">
                  <NavLink exact to="/">
                    Movies
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Popular">Tv Shows</NavLink>
                </li>
              </ul>
              <span
                className={`mobliescreen ${menuBar ? "close" : "open"}`}
                onClick={() => setMenuBar(!menuBar)}>
                <ion-icon icon={menu}></ion-icon>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
