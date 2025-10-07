import React from "react";
import cadre from "../assets/cadre-vert.svg";

function CadreWrapper({ children }) {
  return (
    <div
      className="position-relative d-inline-block w-100"
      style={{
        maxWidth: "1000px", // rritet në desktop
       
        padding: "2vw", // responsive padding (ndryshon sipas ekranit)
        backgroundColor: "transparent",
      }}
    >
      {/* Përmbajtja (video ose imazh) */}
      <div
        className="w-100 h-100"
        style={{
          
          overflow: "hidden",
        }}
      >
        {children}
      </div>

      {/* Korniza SVG mbi media */}
      <img
        src={cadre}
        alt="Cadre vert"
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          pointerEvents: "none",
          zIndex: 10,
         
        }}
      />
    </div>
  );
}

export default CadreWrapper;
