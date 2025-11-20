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
    <>
      <header className="header">
        {/* Logo majtas */}
        <img src={logo} className="logo" alt="logo" />

        {/* Teksti qendër vizuale */}
        <h2 className="title">Plus fort ensemble !</h2>

        {/* Desktop menu */}
        <nav className="desktop-nav">
          {menuItems.map((item, i) => (
            <span key={i} className="nav-item">
              {item}
            </span>
          ))}
        </nav>

        {/* Burger per mobile */}
        <div className="burger" onClick={() => setMenuOpen(true)}>
          <img src={menuVert} className="burger-icon" alt="Menu" />
        </div>
      </header>

      {/* Mobile menu fullscreen */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? 0 : "100%" }}
        transition={{ duration: 0.35 }}
        className="mobile-panel"
      >
        <span className="mobile-close" onClick={() => setMenuOpen(false)}>
          ×
        </span>

        {menuItems.map((item, i) => (
          <div key={i} className="mobile-item">
            {item}
          </div>
        ))}
      </motion.div>

      {/* CSS */}
      <style>{`
      /* ===========================
        BASE HEADER STYLE
=========================== */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  background: #000;
  color: #99CC66;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;        /* SHUMË E RËNDËSISHME */
  padding: 0 20px;
  z-index: 3000;
}

.logo {
  height: 70px;
  flex-shrink: 0;           /* MOS LEJO ZVOGËLIM */
}

.title {
  flex: 1;                  /* ZGJERIM MIDIS LOGO & BURGER */
  text-align: center;
  margin: 0 15px;
  font-size: 28px;
  font-weight: bold;
  color: #99CC66;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;  /* MOS U ZHDUK TEKSTI */
  min-width: 0;
}

.desktop-nav {
  display: flex;
  gap: 25px;
}

.nav-item {
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
}
.nav-item:hover { color: #66ff66; }

.burger {
  display: none;
  width: 55px;
  height: 55px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex-shrink: 0;
}

.burger-icon { width: 100%; }


/* ===========================
        MOBILE MENU
=========================== */
.mobile-panel { position: fixed; top: 0; right: 0; width: 70%; height: 100%; background: #f1e4e4; z-index: 4000; padding-top: 80px; }

.mobile-item { padding: 20px; font-size: 20px; border-bottom: 1px solid #ccc; color: #0f9138; font-weight: bold; }

.mobile-close { position: absolute; top: 15px; right: 20px; font-size: 3rem; color: #0f9138; font-weight: bold; cursor: pointer; z-index: 5000; }


/* ===========================
       BREAKPOINT 0–380px
=========================== */
@media (max-width: 380px) {

  .header {
    height: 70px;
    padding: 0 10px;
  }

  .logo { height: 35px; }

  .title {
    font-size: 14px;
    margin: 0 5px;
  }

  .burger {
    display: flex;
    width: 32px;
    height: 32px;
  }

  .desktop-nav { display: none; }
}


/* ===========================
      BREAKPOINT 381px–843px
=========================== */
@media (min-width: 381px) and (max-width: 843px) {

  .logo { height: 50px; }

  .title {
    font-size: 20px;
    margin: 0 10px;
  }

  .burger {
    display: flex;
    width: 40px;
    height: 40px;
  }

  .desktop-nav { display: none; }
}


/* ===========================
      BREAKPOINT 844px–1024px
=========================== */
@media (min-width: 844px) and (max-width: 1024px) {

  .logo { height: 55px; }

  .title { font-size: 22px; }

  .burger {
    display: flex;
    width: 45px;
    height: 45px;
  }

  .desktop-nav { display: none; }
}


/* ===========================
     DESKTOP SMALL 1025–1280px
=========================== */
@media (min-width: 1025px) and (max-width: 1280px) {
  .logo { height: 60px; }
  .title { font-size: 24px; }
  .burger { display: none; }
  .desktop-nav { display: flex; }
}


/* ===========================
     DESKTOP MEDIUM 1281–1600px
=========================== */
@media (min-width: 1281px) and (max-width: 1600px) {
  .logo { height: 70px; }
  .title { font-size: 28px; }
}


/* ===========================
     DESKTOP LARGE 1601–2400px
=========================== */
@media (min-width: 1601px) and (max-width: 2400px) {
  .logo { height: 85px; }
  .title { font-size: 34px; }
}


/* ===========================
          ULTRAWIDE 2400px+
=========================== */
@media (min-width: 2401px) {
  .logo { height: 100px; }
  .title { font-size: 40px; }
}

      `}</style>
    </>
  );
}

export default Header;
