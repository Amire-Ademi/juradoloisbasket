import React, { useState } from "react";
import logo from "../assets/logo.svg";
import menuVert from "../assets/menu-vert.svg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="d-flex justify-content-between align-items-center px-4"
      style={{
        backgroundColor: "black",
        height: "120px", // header më i lartë
      }}
    >
      {/* Logo majtas */}
      <div className="d-flex align-items-center">
        <img
          src={logo}
          alt="Jura Dolois Basket"
          style={{ height: "100px" }} // logo më e madhe
        />
      </div>

      {/* Slogani qendër */}
      <h2
        className="text-success mb-0 text-center flex-grow-1"
        style={{ fontSize: "28px", fontWeight: "bold" }} // slogani më i madh
      >
        Plus fort ensemble !
      </h2>

      {/* Hamburger djathtas */}
      <div
        style={{ cursor: "pointer", zIndex: 1001 }}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <img
          src={menuVert}
          alt="Menu"
          style={{ height: "55px" }} // menu më e madhe
        />
      </div>

      {/* Sidebar menu */}
      {menuOpen && (
        <div
          className="position-fixed top-0 end-0 h-100 bg-success text-white p-4"
          style={{ width: "250px", zIndex: 1000 }}
        >
          <h3>Menu</h3>
          <ul className="list-unstyled">
            <li>
              <a href="#video" className="text-white">
                Video
              </a>
            </li>
            <li>
              <a href="#inscription" className="text-white">
                Inscription
              </a>
            </li>
            <li>
              <a href="#edito" className="text-white">
                Edito
              </a>
            </li>
            <li>
              <a href="#trophe" className="text-white">
                Trophée
              </a>
            </li>
          </ul>
          <button
            className="btn btn-dark mt-3"
            onClick={() => setMenuOpen(false)}
          >
            Fermer
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
