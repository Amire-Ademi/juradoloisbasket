import React from "react";
import trophe from "../assets/trophe.jpg";
import CadreWrapper from "../components/CadreWrapper";

function TropheeSection() {
  return (
    <section className="container-fluid my-5 px-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 d-flex justify-content-center">
          <CadreWrapper>
            <div style={{ position: "relative", width: "100%" }}>
              {/* Foto responsive */}
              <img
                src={trophe}
                alt="Trophée"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "70vh",
                  objectFit: "cover",

                  display: "block",
                }}
              />

              {/* Titulli mbi foto */}
              <h1
                style={{
                  position: "absolute",
                  top: "25%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontFamily: "Arial, sans-serif",
                  fontWeight: "bold",
                  fontSize: "clamp(16px, 3vw, 32px)",
                  color: "#99CC66",
                  zIndex: 11,
                  textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
                  margin: 0,
                  whiteSpace: "nowrap",
                }}
              >
                ET DEMAIN S'ECRIRA AVEC VOUS
              </h1>
            </div>
          </CadreWrapper>
        </div>
      </div>
    </section>
  );
}

export default TropheeSection;
