import React, { useState, useEffect } from "react";
import { FaLinkedin, FaBars, FaTimes } from "react-icons/fa"; // Import icons for the menu toggle
import logo from "../../assets/GEMBA_LOGO.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu toggle

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle mobile menu visibility
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "shadow-md bg-white" : "bg-transparent"
        }`}
      >
        {/* Topbar */}
        <div className={`bg-gray-800 text-white ${scrolled ? "hidden" : "block"}`}>
      <div className="container mx-auto flex justify-between items-center py-2 px-4 flex-wrap md:flex-nowrap">
        
        {/* Contact Section */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-sm">
          <a href="tel:+91-172-4659657" className="hover:text-gray-400">
            +91-172-4659657
          </a>
          <a href="mailto:sales-team@gembainfotech.com" className="hover:text-gray-400">
            sales-team@gembainfotech.com
          </a>
        </div>
        
        {/* LinkedIn Icon (Hidden on mobile, visible on larger screens) */}
        <div className="mt-4 md:mt-0 justify-end w-full md:w-auto mx-6">
          <a
            href="https://www.linkedin.com/company/gemba-infotech/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>

        {/* Menubar */}
        <div className={`bg-white font-sans shadow-md duration-1000 ${scrolled ? "mt-0" : "mt-0"}`}>
          <div className="container mx-auto flex justify-between items-center py-4 px-4">
            <div className="flex-shrink-0">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
            </div>

            {/* Hamburger Icon for mobile */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-2xl focus:outline-none">
                {menuOpen ? <FaTimes /> : <FaBars />} {/* Toggle between hamburger and close icon */}
              </button>
            </div>

            {/* Menu Items - Hidden on mobile */}
            <div className={`hidden md:flex space-x-6`}>
              <div className="text-lg font-semibold flex space-x-1 items-center ">
                <NavLink
                  className="p-2 rounded transition duration-500 ease-in-out transform hover:-translate-y-1 flex items-center"
                  to="/"
                  activeClassName="bg-white"
                >
                  Home
                </NavLink>
                <NavLink
                  className="p-2 rounded transition duration-500 ease-in-out transform hover:-translate-y-2 flex items-center"
                  to="/about"
                  activeClassName="bg-white"
                >
                  About Us
                </NavLink>
                <NavLink
                  className="p-2 rounded transition duration-500 ease-in-out transform hover:-translate-y-2 flex items-center"
                  to="/services"
                  activeClassName="bg-white"
                >
                  Services
                </NavLink>
                <NavLink
                  className="p-2 rounded transition duration-500 ease-in-out transform hover:-translate-y-2 flex items-center"
                  to="/product"
                  activeClassName="bg-white"
                >
                  Products
                </NavLink>
                <NavLink
                  className="p-2 rounded transition duration-500 ease-in-out transform hover:-translate-y-2 flex items-center"
                  to="/event"
                  activeClassName="bg-white"
                >
                  Events
                </NavLink>
                <NavLink
                  className="p-2 rounded transition duration-500 ease-in-out transform hover:-translate-y-2 flex items-center"
                  to="/partner"
                  activeClassName="bg-white"
                >
                  Partners
                </NavLink>
                <NavLink
                  className="p-2 rounded transition duration-500 ease-in-out transform hover:-translate-y-2 flex items-center"
                  to="/contact"
                  activeClassName="bg-white"
                >
                  Contact
                </NavLink>
              </div>
              <a
                href="https://gembainfotech.com/hrm/admin/users/login"
                target="_blank"
                rel="noopener noreferrer"
                className="my-2 bg-green-500 font-semibold text-md px-6 py-3 rounded-full hover:bg-red-500"
              >
                ESS/MSS
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden ${
              menuOpen ? "block" : "hidden"
            } bg-white shadow-md text-center py-4`}
          >
            <NavLink
              className="block py-2 text-lg font-semibold"
              to="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              className="block py-2 text-lg font-semibold"
              to="/about"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink
              className="block py-2 text-lg font-semibold"
              to="/services"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              className="block py-2 text-lg font-semibold"
              to="/product"
              onClick={() => setMenuOpen(false)}
            >
              Products
            </NavLink>
            <NavLink
              className="block py-2 text-lg font-semibold"
              to="/event"
              onClick={() => setMenuOpen(false)}
            >
              Events
            </NavLink>
            <NavLink
              className="block py-2 text-lg font-semibold"
              to="/partner"
              onClick={() => setMenuOpen(false)}
            >
              Partners
            </NavLink>
            <NavLink
              className="block py-2 text-lg font-semibold"
              to="/contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
            <a
              href="https://gembainfotech.com/hrm/admin/users/login"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-6 py-2 mt-4 bg-green-500 hover:bg-red-500 hover:text-white font-semibold text-md rounded-full mx-auto"
            >
              ESS/MSS
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
