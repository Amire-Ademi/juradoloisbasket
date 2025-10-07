import React from "react";
import soutenir from "../assets/soutenir.png";
import CadreWrapper from "../components/CadreWrapper";

function SoutenirSection() {
  return (
    <section className="container-fluid my-5 px-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 d-flex justify-content-center">
          <CadreWrapper>
            <div style={{ position: "relative", width: "100%" }}>
              {/* Foto responsive */}
              <img
                src={soutenir}
                alt="Soutenir"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "70vh",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </CadreWrapper>
        </div>
      </div>
    </section>
  );
}

export default SoutenirSection;
