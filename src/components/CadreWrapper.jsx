import React from "react";
import cadre from "../assets/cadre-vert.svg";

function CadreWrapper({ children }) {
  return (
    <div
      className="position-relative mx-auto"
      style={{
        width: "100%",
        maxWidth: "1000px",
        aspectRatio: "16/9", // ruan raport konstant për kornizën
        overflow: "visible",
      }}
    >
      {/* Fotoja ose përmbajtja */}
      <div
        className="position-relative w-100 h-100 overflow-hidden"
        style={{
          zIndex: 1,
        }}
      >
        {/* Sigurohu që fotoja brenda ka width dhe height 100% */}
        {children}
      </div>

      {/* Korniza SVG pak jashtë fotos */}
      <img
        src={cadre}
        alt="Cadre vert"
        className="position-absolute"
        style={{
          top: "-2%", // del pak jashtë
          left: "-2%",
          right: "-2%",
          bottom: "-2%",
          width: "104%",
          height: "104%",
          objectFit: "contain", // ruan raportin e saktë të SVG-së
          pointerEvents: "none",
          zIndex: 5,
        }}
      />
    </div>
  );
}

export default CadreWrapper;
