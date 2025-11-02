import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import CadreWrapper from "../components/CadreWrapper";
import video from "../assets/match.mp4";
import trophe from "../assets/trophe.jpg";
import engagementMoral from "../assets/engagement-moral.jpg";
import soutenir from "../assets/soutenir.png";
import logo from "../assets/logo.svg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const menuItems = ["edito", "engagement", "soutenir"];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        zIndex: 2000,
        backgroundColor: "#000",
        color: "#99CC66",
        padding: "0.6rem 1rem",
        boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.5)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <img
          src={logo}
          alt="Jura Dolois Basket"
          style={{ height: "40px", width: "auto", cursor: "pointer" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
        <h2
          style={{
            fontFamily: "Arial",
            fontWeight: "bold",
            color: "#99CC66",
            fontSize: "1.1rem",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            margin: 0,
            whiteSpace: "nowrap",
          }}
        >
          Plus Fort Ensemble !
        </h2>

        {/* Burger Menu */}
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            width: "28px",
            height: "22px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            cursor: "pointer",
            zIndex: 3001,
          }}
        >
          <span
            style={{
              height: "3px",
              width: "100%",
              backgroundColor: "#99CC66",
              borderRadius: "2px",
              transition: "0.3s",
              transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none",
            }}
          />
          <span
            style={{
              height: "3px",
              width: "100%",
              backgroundColor: "#99CC66",
              borderRadius: "2px",
              opacity: menuOpen ? 0 : 1,
              transition: "0.3s",
            }}
          />
          <span
            style={{
              height: "3px",
              width: "100%",
              backgroundColor: "#99CC66",
              borderRadius: "2px",
              transition: "0.3s",
              transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none",
            }}
          />
        </div>
      </div>

      {/* Menu Mobile */}
      <motion.nav
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: menuOpen ? 1 : 0, x: menuOpen ? 0 : "100%" }}
        transition={{ duration: 0.3 }}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100vh",
          width: "70%",
          backgroundColor: "#99CC66",
          padding: "4rem 2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          borderTopLeftRadius: "15px",
          zIndex: 3000,
        }}
      >
        {menuItems.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => handleNavClick(id)}
            style={{
              color: "#000",
              fontWeight: "bold",
              fontSize: "1.3rem",
              textDecoration: "none",
            }}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </motion.nav>

      {/* Mobile Styles */}
      <style>
        {`
          @media (max-width: 480px) {
            header {
              padding: 0.5rem 1rem !important;
            }
            header h2 {
              position: static !important;
              transform: none !important;
              font-size: 0.95rem !important;
            }
          }
        `}
      </style>
    </header>
  );
}

// --- Scroll Animation ---
const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const ScrollSection = ({ children }) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={fadeUp}>
      {children}
    </motion.div>
  );
};

// --- Accueil ---
function Accueil() {
  const mediaPadding = "2vw";
  const titleStyle = {
    fontFamily: "Arial, sans-serif",
    fontWeight: "bold",
    fontSize: "clamp(20px, 3vw, 36px)",
    color: "#99CC66",
  };
  const textGreen = {
    fontFamily: "Arial, sans-serif",
    textAlign: "justify",
    fontWeight: "bold",
    fontSize: "clamp(14px, 2vw, 18px)",
    color: "#99CC66",
  };
  const greenBg = { backgroundColor: "#99CC66" };

  return (
    <div style={{ backgroundColor: "#000", minHeight: "100vh" }}>
      <Header />
      <main style={{ marginTop: "110px", scrollBehavior: "smooth" }}>
        {/* Video Section */}
        <ScrollSection>
          <section className="container-fluid my-4 px-3">
            <div className="row g-4 justify-content-center">
              <div className="col-12 col-md-6 d-flex justify-content-center">
                <div style={{ padding: mediaPadding, width: "100%" }}>
                  <CadreWrapper>
                    <video
                      src={video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </CadreWrapper>
                </div>
              </div>

              <div className="col-12 col-md-6 d-flex justify-content-center">
                <div style={{ padding: mediaPadding, width: "100%" }}>
                  <div
                    style={{
                      ...greenBg,
                      padding: "2rem",
                      width: "100%",
                      aspectRatio: "16/9",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "Arial",
                        fontWeight: "bold",
                        fontSize: "36px",
                        color: "#000",
                        marginBottom: "1.5rem",
                      }}
                    >
                      Comment s’inscrire au Jura Dolois Basket
                    </h3>
                    <div
                      style={{
                        fontFamily: "Arial",
                        fontSize: "18px",
                        color: "#000",
                        lineHeight: "2.0",
                        textAlign: "left",
                        maxWidth: "90%",
                      }}
                    >
                      <p>
                        1°) Nous vous proposons de venir faire des essais en
                        septembre
                      </p>
                      <p>
                        2°) Demander à l’éducateur quel est son avis sur les
                        suites à donner
                      </p>
                      <p>
                        3°) Vous recevrez un email d’inscription pour réaliser
                        votre demande de licence
                      </p>
                      <p>
                        4°) Une fois votre licence validée par le club, vous
                        recevrez votre licence par mail
                      </p>
                      <hr
                        style={{
                          border: "none",
                          height: "5px",
                          backgroundColor: "#000",
                          margin: "1.5rem 0",
                        }}
                      />
                      <p>
                        Le certificat médical n’est pas obligatoire chez les
                        enfants (répondre au questionnaire)
                      </p>
                      <p>
                        Payer en ligne facilite la gestion des licences, merci.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollSection>

        {/* Edito */}
        <ScrollSection>
          <section id="edito" className="container-fluid my-4 px-3">
            <div className="row g-4 justify-content-center align-items-stretch">
              <div className="col-12 col-md-6 d-flex justify-content-center">
                <div style={{ padding: mediaPadding, width: "100%" }}>
                  <div
                    style={{
                      backgroundColor: "#000",
                      padding: "1rem",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <h3 style={titleStyle}>Edito</h3>
                    <p
                      style={{
                        fontFamily: "Arial",
                        fontSize: "18px",
                        color: "#99CC66",
                      }}
                    >
                      Porté par une équipe dirigeante dynamique, le Jura Dolois
                      Basket (JDB) s'engage activement dans le développement et
                      la promotion d'une image positive, en cultivant une
                      ambiance conviviale et chaleureuse. Nos licenciés
                      défendent fièrement nos couleurs : Noir et Rose pour les
                      équipes féminines, Noir et Vert pour les équipes
                      masculines.
                    </p>
                    <p
                      style={{
                        fontFamily: "Arial",
                        fontSize: "18px",
                        color: "#99CC66",
                      }}
                    >
                      {" "}
                      Fort de son histoire, le Jura Dolois Basket a su obtenir
                      d'excellents résultats au fil des années et nous plaçons
                      la formation de nos jeunes talents au cœur de notre projet
                      sportif afin de rester compétitifs. Chaque saison,
                      plusieurs de nos joueuses et joueurs intègrent la
                      sélection du Jura, témoignant du succès de notre travail
                      avec la relève.
                    </p>
                    <p
                      style={{
                        fontFamily: "Arial",
                        fontSize: "18px",
                        color: "#99CC66",
                      }}
                    >
                      L’association « Jura Dolois Basket » est née en 2004 de la
                      fusion de deux associations emblématiques de
                      l’agglomération doloise : l’USTD Basket, basée à Tavaux,
                      qui accueillait les jeunes de Tavaux, et l’Association
                      Basket Club Dolois, située à Dole, qui accueillait les
                      jeunes de Dole et de ses alentours.
                    </p>
                    <p
                      style={{
                        fontFamily: "Arial",
                        fontSize: "18px",
                        color: "#99CC66",
                      }}
                    >
                      {" "}
                      Le Jura Dolois Basket dispose d'infrastructures sportives
                      situées dans l’agglomération du Grand Dole, avec les
                      rencontres à domicile qui se déroulent au gymnase Belvoye,
                      à Damparis.
                    </p>
                    <p
                      style={{
                        fontFamily: "Arial",
                        fontSize: "18px",
                        color: "#99CC66",
                      }}
                    >
                      {" "}
                      L’association Jura Dolois Basket incarne une véritable
                      communauté sportive unie autour de la passion du basket.
                      Intergénérationnelle, elle rassemble des équipes allant du
                      mini-basket aux équipes seniors.
                    </p>
                    <p
                      style={{
                        fontFamily: "Arial",
                        fontSize: "18px",
                        color: "#99CC66",
                      }}
                    >
                      {" "}
                      Aujourd'hui, ce sont plus de 250 licenciés qui font vivre
                      et vibrer l’association.
                    </p>
                  </div>
                </div>
              </div>

              {/* Image Trophee */}

              <div className="col-12 col-md-6 d-flex justify-content-center">
                <div style={{ padding: mediaPadding, width: "100%" }}>
                  <CadreWrapper>
                    <div className="position-relative w-100 h-100">
                      <img
                        src={trophe}
                        alt="Trophée"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                      <h1
                        className="position-absolute text-center"
                        style={{
                          top: "3%",
                          left: "30%",
                          transform: "translateX(-50%)",
                          fontSize: "clamp(16px, 3vw, 28px)",
                          color: "#99CC66",
                          textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
                          whiteSpace: "nowrap",
                          zIndex: 11,
                          fontFamily: "Arial",
                          fontWeight: "normal",
                        }}
                      >
                        ET DEMAIN S'ECRIRA AVEC VOUS
                      </h1>

                      <style>
                        {`
    @media (max-width: 480px) {
      .cadre-wrapper h1 {
        top: 
      2% !important;     /* më poshtë në mobile */
        font-size: 14px !important;  /* më e vogël */
        width: 58% !important;  /* kufizon që të mos dalë jashtë */
      }
    }
  `}
                      </style>
                    </div>
                  </CadreWrapper>
                </div>
              </div>
            </div>
          </section>
        </ScrollSection>

        {/* Engagement Moral */}
        <ScrollSection>
          <section id="engagement" className="container-fluid my-4 px-3">
            <div className="row g-4 justify-content-center">
              <div className="col-12 col-md-6 d-flex justify-content-center">
                <div style={{ padding: mediaPadding, width: "100%" }}>
                  <div style={{ backgroundColor: "#000", padding: "1rem" }}>
                    <h3 style={titleStyle}>Engagement Moral</h3>

                    <p
                      style={{
                        fontFamily: "Arial",
                        fontSize: "18px",
                        color: "#99CC66",
                      }}
                    >
                      <strong>Responsabilité :</strong>
                      <br />
                      Nous adoptons une approche globale du basket, qui intègre
                      non seulement l’aspect sportif des joueurs, mais également
                      leur environnement social, avec une attention particulière
                      aux règles d’arbitrage et aux comportements visant le bien
                      commun.
                    </p>
                    <p
                      style={{
                        fontFamily: "Arial",
                        fontSize: "18px",
                        color: "#99CC66",
                      }}
                    >
                      {" "}
                      <strong>Exemplarité :</strong>
                      <br />
                      Principe au cœur de notre charte, nous demandons à chacun
                      de faire preuve d’exemplarité. Nous attendons de tous nos
                      licenciés qu'ils respectent les règles du jeu, les
                      adversaires, les arbitres, les éducateurs, les
                      dirigeants/bénévoles, les autres joueurs, les spectateurs,
                      les partenaires, et le matériel.
                    </p>
                    <p
                      style={{
                        fontFamily: "Arial",
                        fontSize: "18px",
                        color: "#99CC66",
                      }}
                    >
                      <strong>Formation :</strong>
                      <br />
                      Nos jeunes licenciés ne se forment pas seulement en tant
                      que joueurs, mais acquièrent également des compétences
                      essentielles au bon déroulement des rencontres comme faire
                      respecter des règles de jeu en tant qu’arbitre ou gérer
                      les évènements de jeu (entrée en jeu, points marqués,
                      fautes commises, etc.) en tant que marqueur ou maîtriser
                      le temps de jeu en tant que chronométreur.
                    </p>
                    <p
                      style={{
                        fontFamily: "Arial",
                        fontSize: "18px",
                        color: "#99CC66",
                      }}
                    >
                      {" "}
                      <strong>Général :</strong>
                      <br />
                      Nous sommes engagés dans une démarche de responsabilité
                      sociétale. Notre association est un lieu de vie et
                      d’apprentissage où ces valeurs sont au centre de notre
                      projet associatif visant à allier excellence sportive et
                      citoyenneté.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 d-flex justify-content-center">
                <div style={{ padding: mediaPadding, width: "100%" }}>
                  <CadreWrapper>
                    <img
                      src={engagementMoral}
                      alt="Engagement Moral"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </CadreWrapper>
                </div>
              </div>
            </div>
          </section>
        </ScrollSection>

        {/* Soutenir */}
        <ScrollSection>
          <section id="soutenir" className="container-fluid my-4 px-3">
            <div className="row g-4 justify-content-center">
              <div className="col-12 col-md-6 d-flex justify-content-center">
                <div style={{ padding: mediaPadding, width: "100%" }}>
                  <CadreWrapper>
                    <img
                      src={soutenir}
                      alt="Soutenir"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </CadreWrapper>
                </div>
              </div>
              <div className="col-12 col-md-6 d-flex justify-content-center">
                <div style={{ padding: mediaPadding, width: "100%" }}>
                  <div style={{ backgroundColor: "#000", padding: "1rem" }}>
                    <h3 style={titleStyle}>Soutenir le Jura Basket</h3>
                    <p
                      style={{
                        fontFamily: "Arial",
                        fontSize: "18px",
                        color: "#99CC66",
                      }}
                    >
                      <strong>Bénévoles :</strong>
                      <br />
                      <br />
                      Notre association sportive vit grâce à l’énergie et à
                      l’engagement de ses bénévoles. Qu’il s’agit de nous aider
                      à l’encadrement lors des entraînements ou des matchs, de
                      soutenir nos équipes lors des compétitions ou de
                      participer à la vie du club au quotidien, chaque coup de
                      main est précieux et fait votre passion du sport et
                      contribue à une belle aventure collective. N’hésitez pas à
                      nous rejoindre.
                      <br />
                      <br />
                      Pour toute information ou pour proposer votre aide, vous
                      pouvez nous contacter au 06.51.73.24.84
                    </p>
                    <p
                      style={{
                        fontFamily: "Arial, sans-serif",
                        fontSize: "18px",
                        color: "#99CC66",
                      }}
                    >
                      <strong>Partenaires / Donateurs :</strong>
                      <br />
                      <br />
                      Nos partenaires / donateurs occupent une place essentielle
                      dans la vie de notre association. Grâce à leur soutien,
                      nous pouvons offrir de meilleures conditions
                      d’entraînement à nos membres, organiser des événements,
                      développer nos projets sportifs et acheter des tenues de
                      match. Leur engagement à nos côtés contribue directement
                      au dynamisme et à la réussite du Jura Dolois Basket (JDB).
                      <br />
                      <br />
                      Si vous souhaitez associer votre image à notre aventure
                      sportive et soutenir une initiative locale pleine
                      d’énergie et de passion, nous serions ravis d’échanger
                      avec vous. <br />
                      <br />
                      N’hésitez pas à nous contacter pour en savoir plus sur les
                      différentes possibilités de partenariat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollSection>
      </main>

      {/* Media Query për CadreWrapper */}
      <style>
        {`
          @media (max-width: 480px) {
            .cadre-wrapper {
              max-width: 320px;
              max-height: 220px;
              margin: 0 auto;
            }
            .cadre-wrapper img,
            .cadre-wrapper video {
              width: 100%;
              height: 100%;
              object-fit: cover;
              display: block;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Accueil;
