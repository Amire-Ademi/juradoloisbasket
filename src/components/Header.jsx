import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.svg";
import menuVert from "../assets/menu-vert.svg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    "Accueil",
    "Club",
    "Les horaires",
    "Nos gymnases",
    "Nos équipes",
    "Nos partenaires",
    "Boutique",
    "Contact",
    "FAQ",
  ];

  return (
    <header className="header">
      {/* ======================================
                 DESKTOP HEADER
      ======================================= */}
      <div className="desktop-header">
        <img src={logo} alt="Logo" className="header-logo" />

        <h2 className="header-title">Plus fort ensemble !</h2>

        <nav className="desktop-nav">
          {menuItems.map((item, i) => (
            <span key={i} className="nav-item">{item}</span>
          ))}
        </nav>
      </div>

      {/* ======================================
                 MOBILE HEADER
      ======================================= */}
      <div className="mobile-header">
        <img src={logo} alt="Logo" className="header-logo" />

        <h2 className="header-title">Plus fort ensemble !</h2>

        <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          {!menuOpen ? (
            <img src={menuVert} alt="Menu" />
          ) : (
            <span className="close-x">×</span>
          )}
        </div>
      </div>

      {/* ======================================
                   BURGER MENU PANEL
      ======================================= */}
      <motion.div
        className="mobile-menu-panel"
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? 0 : "100%" }}
        transition={{ duration: 0.4 }}
      >
        <ul className="mobile-menu-list">
          {menuItems.map((item, i) => (
            <li key={i} className="mobile-menu-item">
              <span>{item}</span>
              <span className="arrow">›</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* ======================================
                     CSS STYLE
      ======================================= */}
      <style>{`
        /* ------------ GENERAL ------------ */
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 3000;
          background: #000;
          padding: 0.5rem 1.5rem;
        }

        .header-logo {
          height: 70px;
          cursor: pointer;
        }

        .header-title {
          font-family: Arial;
          font-weight: bold;
          color: #99CC66;
          white-space: nowrap;
        }

        /* ------------ DESKTOP HEADER ------------ */
        .desktop-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .desktop-nav {
          display: flex;
          gap: 1.5rem;
        }

        .nav-item {
          font-weight: bold;
          color: #99CC66;
          cursor: pointer;
          transition: 0.2s;
        }

        .nav-item:hover {
          color: #66ff66;
        }

        /* ------------ MOBILE HEADER ------------ */
        .mobile-header {
          display: none;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          text-align: center;
        }

        .burger {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .close-x {
          font-size: 3rem;
          color: #0f9138;
        }

        /* ------------ MOBILE MENU ------------ */
        .mobile-menu-panel {
          position: fixed;
          top: 0;
          right: 0;
          width: 60%;
          height: 100vh;
          background: #f1e4e4;
          z-index: 4000;
          padding: 2rem 1.5rem;
        }

        .mobile-menu-list {
          list-style: none;
          padding: 0;
          margin-top: 3rem;
        }

        .mobile-menu-item {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #ccc;
          padding: 1rem 0;
          font-size: 1.3rem;
          font-weight: bold;
          color: #0f9138;
        }

        .arrow {
          font-size: 1.5rem;
        }

        /* ------------ RESPONSIVE BREAKPOINTS ------------ */

        /* DESKTOP MODE */
        @media (min-width: 1024px) {
          .mobile-header,
          .mobile-menu-panel {
            display: none;
          }

          .header-title {
            font-size: 32px;
          }
        }

        /* MOBILE MODE */
        @media (max-width: 1023px) {
          .desktop-header {
            display: none;
          }

          .mobile-header {
            display: grid;
          }

          .header-title {
            font-size: 20px;
          }

          .header-logo {
            height: 55px;
          }
        }

        /* VERY SMALL SCREENS */
        @media (max-width: 380px) {
          .header-title {
            font-size: 16px !important;
          }

          .burger {
            width: 50px;
            height: 50px;
          }
        }
      `}</style>
    </header>
  );
}

export default Header;
