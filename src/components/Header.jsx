import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.svg";
import menuVert from "../assets/menu-vert.svg";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    "Accueil",
    "Club",
    "Les horaires",
    "Nos gymnases",
    "Nos équipes",
    "Nos partenaires",
    "BOUTIQUE",
    "Contact",
    "FAQ",
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        zIndex: 3000,
        backgroundColor: "#000",
        color: "#99CC66",
        padding: "0.8rem 1.5rem",
        boxShadow: "0 0 0 0 transparent",
        display: "flex",

        alignItems: "center",
        justifyContent: "space-between",
        gap: "2rem",
        transform: "translateZ(0)",
        willChange: "transform",
        backfaceVisibility: "hidden",
      }}
    >
      {/* Logo majtas */}
      <img
        src={logo}
        alt="Logo"
        style={{ height: "90px", width: "auto", cursor: "pointer" }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />

      {/* Titulli në qendër */}
      <h2
        style={{
          margin: 0,
          fontFamily: "Arial",
          fontWeight: "bold",
          color: "#99CC66",
          fontSize: "36px",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        Plus fort ensemble !
      </h2>

      <div
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          width: "70px",
          height: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 4001,
        }}
      >
        {!menuOpen ? (
          <img
            src={menuVert}
            alt="Menu"
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <span style={{ fontSize: "2.5rem", color: "#0f9138" }}>×</span>
        )}
      </div>

      {/* MENU BURGER */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? 0 : "100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "40%",
          height: "100vh",
          backgroundColor: "#f1e4e4",
          zIndex: 4000,
          display: "flex",
          flexDirection: "column",
          padding: "1.5rem 1.5rem",
          boxShadow: "-5px 0 20px rgba(0,0,0,0.3)",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            marginTop: "4rem",
            padding: 0,
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          {menuItems.map((item, index) => (
            <li
              key={index}
              style={{
                borderBottom: "1px solid #ccc",
                padding: "1rem 0",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: "#53a402ff",
                fontWeight: "bold",
                fontSize: "1.2rem",
                cursor: "pointer",
              }}
            >
              <span>{item}</span>
              <span style={{ color: "#0f9138", fontSize: "1.4rem" }}>›</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </header>
  );
}

export default Header;
