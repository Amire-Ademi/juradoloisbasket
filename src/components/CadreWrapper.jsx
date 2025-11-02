import React from "react";
import cadre from "../assets/cadre-vert.svg";

function CadreWrapper({ children }) {
  return (
    <div
      className="position-relative mx-auto cadre-wrapper"
      style={{
        width: "100%",
        aspectRatio: "16/9",
        overflow: "hidden", // mbajt foton/video brenda kornizës
        position: "relative",
        margin: "0 auto",
      }}
    >
      {/* Fotoja ose video pak më e vogël se cadre */}
      <div
        className="position-relative w-100 h-100"
        style={{
          zIndex: 1,
          overflow: "hidden",
          padding: "1.5%", // <-- e bën pak më të vogël se cadre
        }}
      >
        {children}
      </div>

      {/* Korniza SVG */}
      <img
        src={cadre}
        alt="Cadre vert"
        className="position-absolute"
        style={{
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          objectFit: "contain",
          pointerEvents: "none",
          zIndex: 5,
        }}
      />
    </div>
  );
}

export default CadreWrapper;
