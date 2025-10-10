import React from "react";
import trophe from "../assets/trophe.jpg";
import CadreWrapper from "../components/CadreWrapper";

function TropheeSection() {
  return (
    <section className="container my-5 px-3">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10">
          <CadreWrapper>
            <img
              src={trophe}
              alt="Trophée"
              className="w-100 h-100"
              style={{
                objectFit: "cover",
                display: "block",
              }}
            />

            <h1
              className="position-absolute text-center fw-bold"
              style={{
                top: "25%",
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: "clamp(16px, 3vw, 32px)",
                color: "#99CC66",
                textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
                whiteSpace: "nowrap",
                zIndex: 10, // mbi foton, por poshtë kornizës
              }}
            >
              ET DEMAIN S'ECRIRA AVEC VOUS
            </h1>
          </CadreWrapper>
        </div>
      </div>
    </section>
  );
}

export default TropheeSection;
