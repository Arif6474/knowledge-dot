import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo/header-logo.png";
import downArrow from "../../../assets/images/icons/downArrow.png";
import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu";
import { RiCloseFill } from "@react-icons/all-files/ri/RiCloseFill";
import "./Header.css";

import { useState } from "react";
function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [aboutUs, setAboutUs] = useState(false);
  const [membershipOverview, setMembershipOverview] = useState(false);
  const [education, setEducation] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  const handleAboutUs = () => {
    setAboutUs(!aboutUs);
  };
  const handleMembershipOverview = () => {
    setMembershipOverview(!membershipOverview);
  };
  const handleEducation = () => {
    setEducation(!education);
  };

  return (
    <div className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <button
          onClick={handleMobileMenu}
          className="open_menu"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#sideCanvas"
        >
          {/* <img src= alt="" /> */}
          <AiOutlineMenu />
        </button>
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="" />
        </Link>

        <div className="desktopNav m-auto">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                HOME
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle">
                ABOUT US
                <img src={downArrow} alt="" />
              </Link>

              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/aboutUs">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/ourBoard">
                    Our Board
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                MEMBERSHIP
                <img src={downArrow} alt="" />
              </Link>

              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/membershipOverview">
                    Membership Overview
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/womenInLogistics">
                    Women in Logistic & <br /> Transport
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/youngProfession">
                    Young Professionals
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/corporateMembershipOverview"
                  >
                    Corporate Membership
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                EDUCATION
                <img src={downArrow} alt="" />
              </Link>

              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/courses">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/knowledgeCenter">
                    Knowledge Center
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/career">
                    Career
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/news">
                NEWS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/allEvents">
                EVENTS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactUs">
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item">
            <Link
              to="/joinCilt"
              className="nav-link nav-btn"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
            >
              JOIN CILT
            </Link>
          </li>
        </ul>
      </div>
      {mobileMenu && (
        <div
          data-aos="fade-right"
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="sideCanvas"
        >
          <div class="offcanvas-header">
            <button
              onClick={handleMobileMenu}
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              className="close_menu"
            >
              <RiCloseFill />
            </button>
          </div>
          <div class="offcanvas-body">
            <ul class="sideMenu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li onClick={handleAboutUs}>
                <Link class="sideDropdown">About Us</Link>

                {aboutUs && (
                  <ul class="dropdownMenu d-none">
                    <li>
                      <Link to="/aboutUs">About Us</Link>
                    </li>
                    <li>
                      <Link to="/ourBoard">Our Board</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li onClick={handleMembershipOverview}>
                <Link class="sideDropdown">Membership</Link>
                {membershipOverview && (
                  <ul class="dropdownMenu d-none">
                    <li>
                      <Link to="/membershipOverview">Membership Overview</Link>
                    </li>
                    <li>
                      <Link to="/womenInLogistics">
                        Women in Logistic & Transport
                      </Link>
                    </li>
                    <li>
                      <Link to="/youngProfession"> Young Professionals</Link>
                    </li>
                    <li>
                      <Link to="/corporateMembershipOverview">
                        {" "}
                        Corporate Membership
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li onClick={handleEducation}>
                <Link class="sideDropdown">Education</Link>

                { education &&
                  <ul class="dropdownMenu d-none">
                    <li>
                      <Link to="/courses">Courses</Link>
                    </li>
                    <li>
                      <Link to="/Knowledge Center">Knowledge Center</Link>
                    </li>
                    <li>
                      <Link to="/career">Career</Link>
                    </li>
                  </ul>
                }
              </li>

              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <Link to="/allEvents">Events</Link>
              </li>
              <li>
                <Link to="/contactUs">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
