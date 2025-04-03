import { Link, useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import "./header.css";
function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  // Header
  return (
    <div className={`${isHomePage ? "header" : "header2"}`}>
      <div className="header-container container">
        <Link to="/">
          <div>
            <img src="/cvh_logo2.webp" alt="logo" />
          </div>
        </Link>
        <ul className="header-nav desktop-nav">
          <Link to="../" className="link">
            <li>Home</li>
          </Link>
          <Link to="../portfolio" className="link">
            <li>Portfolio</li>
          </Link>
          <Link to="../process" className="link">
            <li>Process</li>
          </Link>
          <Link to="../About" className="link">
            <li>About</li>
          </Link>
          <Link to="../contact" className="link">
            <li>Contact</li>
          </Link>
        </ul>
        <div
          className="mobile-nav"
          onClick={() => {
            setMobileMenu(!mobileMenu);
          }}
        >
          <IoMenu size={30} />
        </div>
      </div>

      {mobileMenu && (
        <ul className="mobile-nav-list">
          <div onClick={() => setMobileMenu(false)} className="close-icon">
            <ImCross />
          </div>
          <Link to="../" className="link" onClick={() => setMobileMenu(false)}>
            <li>Home</li>
          </Link>
          <Link
            to="../portfolio"
            className="link"
            onClick={() => setMobileMenu(false)}
          >
            <li>Portfolio</li>
          </Link>
          <Link
            to="../process"
            className="link"
            onClick={() => setMobileMenu(false)}
          >
            <li>Process</li>
          </Link>
          <Link
            to="../About"
            className="link"
            onClick={() => setMobileMenu(false)}
          >
            <li>About</li>
          </Link>
          <Link
            to="../contact"
            className="link"
            onClick={() => setMobileMenu(false)}
          >
            <li>Contact</li>
          </Link>
        </ul>
      )}
    </div>
  );
}
export default Header;
