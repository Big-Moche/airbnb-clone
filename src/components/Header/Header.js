import React, { useRef, useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";
import SigninPopup from "../../SigninPopup/SigninPopup";

const Header = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guestCount, setGuestCount] = useState(1);
  const [showGuestPopup, setShowGuestPopup] = useState(false);
  const popRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleGuestChange = (operation) => {
    setGuestCount((prevCount) => {
      const newCount =
        operation === "increment" ? prevCount + 1 : prevCount - 1;
      return Math.max(1, Math.min(20, newCount));
    });
  };
  return (
    <>
      <div>
        <div className="header">
          <div className="header-container">
            <div className="logo-container">
              {/* image */}
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp-nYTWgFoqRnmFEofLfLFyyqJo52LzMv0Bg&s" />
            </div>
            <div className="middle-container">
              <NavLink to="/">
                <span className="homes-exp-service">
                  <img
                    className="header-image"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS24t_najop1GA8PGBZGfqI3_LCZmwNY4BNSQ&s"
                  />
                  Homes
                </span>
              </NavLink>

              <NavLink to="/experience">
                <span className="homes-exp-service">
                  <img
                    className="header-image"
                    src="data:image/jpeg;base64,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"
                  />
                  Experiences
                </span>
              </NavLink>

              {/* Homes, experiences, services */}
            </div>
            <div className="links-container">
              <NavLink className="airbnb-home-link" to="/">
                Become a host
              </NavLink>

              <LanguageIcon />

              <div className="menu-profile">
                <button
                  className="sign-inbtn"
                  onClick={() => setShowPopup(true)}
                >
                  <MenuIcon />
                  <AccountCircleIcon />
                </button>
              </div>
              {showPopup && <SigninPopup onClose={() => setShowPopup(false)} />}

              {/* menu icon & profile icon (globe and your home text) */}
            </div>
          </div>
          <div className="header-bottom display-center">
            <div className="bottom-header-container display-center gap-30">
              <div className="search-where">
                <p>where</p>
                <div className="search-input">
                  <input type="text" placeholder="Search destinations" />
                </div>
              </div>
              <div className="checkin-date">
                <p>CheckIn</p>
                <DatePicker
                  className="date-picker-styles"
                  selected={checkInDate}
                  onChange={(date) => setCheckInDate(date)}
                  placeholderText="Add date"
                />
              </div>
              <div className="checkout-date">
                <p>Check Out</p>
                <DatePicker
                  className="date-picker-styles"
                  selected={checkOutDate}
                  onChange={(date) => setCheckOutDate(date)}
                  placeholderText="Add date"
                />
              </div>
              <div className="guest-counter">
                <p>Who</p>
                <button
                  className="search-button"
                  onClick={() => setShowGuestPopup(true)}
                >
                  {guestCount > 0
                    ? `${guestCount} Guests`
                    : `${guestCount} Guest`}{" "}
                </button>
                {showGuestPopup && (
                  <div className="guest-popup" ref={popRef}>
                    <div className="guest-selector">
                      <button
                        className="guest-button"
                        onClick={handleGuestChange("decrement")}
                      >
                        <RemoveIcon />
                      </button>
                      <input
                        type="number"
                        value={guestCount}
                        readOnly
                        className="guest-input"
                      />
                      <button
                        className="guest-button"
                        onClick={handleGuestChange("increment")}
                      >
                        <AddIcon />
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className="search-icon-container display-center">
                <SearchIcon className="search-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
<div className="different-searches"></div>;
