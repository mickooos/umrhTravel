import { useState } from "react";
import { Link as LinkTo } from "react-scroll";
import companyLogo from "../assets/images/logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleItemClick = () => {
    setIsOpen(false); // Menutup navbar saat item diklik
  };
  return (
    <>
      <header className="header">
        <div className="overlay" data-overlay />
        <div className="header-top">
          <div className="container">
            <a href="#" className="logo">
              <img src={companyLogo} alt="Company Logo" />
            </a>
            <div className="header-btn-group">
              <button
                className="nav-open-btn"
                aria-label="Open Menu"
                data-nav-open-btn
                onClick={toggleMenu}
              >
                <ion-icon name="menu-outline"></ion-icon>
              </button>
            </div>
          </div>
        </div>

        <div className="header-bottom">
          <div className="container">
            <nav className={`navbar ${isOpen ? "active" : ""}`}>
              <ul className="navbar-list">
                <li>
                  <LinkTo
                    to="home"
                    className="navbar-link"
                    data-nav-link
                    spy={true}
                    smooth={true}
                    duration={1100}
                    onClick={handleItemClick}
                  >
                    home
                  </LinkTo>
                </li>
                <li>
                  <LinkTo
                    to="aboutus"
                    className="navbar-link"
                    data-nav-link
                    spy={true}
                    smooth={true}
                    duration={1100}
                    onClick={handleItemClick}
                  >
                    about us
                  </LinkTo>
                </li>
                <li>
                  <LinkTo
                    to="activity"
                    className="navbar-link"
                    data-nav-link
                    spy={true}
                    smooth={true}
                    duration={1100}
                    onClick={handleItemClick}
                  >
                    activity
                  </LinkTo>
                </li>
                <li>
                  <LinkTo
                    to="package"
                    className="navbar-link"
                    data-nav-link
                    spy={true}
                    smooth={true}
                    offset={70}
                    duration={1100}
                    onClick={handleItemClick}
                  >
                    packages
                  </LinkTo>
                </li>
                <li>
                  <LinkTo
                    to="gallery"
                    className="navbar-link"
                    data-nav-link
                    spy={true}
                    smooth={true}
                    offset={70}
                    duration={1100}
                    onClick={handleItemClick}
                  >
                    news
                  </LinkTo>
                </li>
                <li>
                  <LinkTo
                    to="contactus"
                    className="navbar-link"
                    data-nav-link
                    spy={true}
                    smooth={true}
                    duration={1100}
                    onClick={handleItemClick}
                  >
                    contact us
                  </LinkTo>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
