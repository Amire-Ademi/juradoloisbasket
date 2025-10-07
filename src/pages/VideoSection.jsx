import React from "react";
import video from "../assets/match.mp4";
import CadreWrapper from "../components/CadreWrapper";

function VideoSection() {
  return (
    <section id="video" className="container-fluid my-5 px-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 d-flex justify-content-center">
          <CadreWrapper>
            <div style={{ position: "relative", width: "100%" }}>
              <video
                src={video}
                className="w-100"
                autoPlay
                loop
                muted
                playsInline
                style={{
                  
                  objectFit: "cover",
                  height: "auto", // responsive në vend të 500px
                  maxHeight: "70vh", // kufi që të mos zgjatet tepër
                }}
              />
            </div>
          </CadreWrapper>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
