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

  const containerVariants = {
    hidden: { opacity: 0, scaleY: 0, transformOrigin: "top" },
    visible: {
      opacity: 1,
      scaleY: 1,
      transformOrigin: "top",
      transition: { staggerChildren: 0.1, duration: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0, // shto këtë
        width: "100%",
        zIndex: 2000,
        backgroundColor: "#000000",
        backdropFilter: "none",
        color: "#99CC66",
        padding: "0.8rem 1.5rem",
        boxShadow: "none",

        transition: "all 0.3s ease",
        borderBottom: "none", // opsionale
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          src={logo}
          alt="Jura Dolois Basket"
          style={{
            height: "45px",
            width: "auto",
            cursor: "pointer",
            borderRadius: "6px",
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />

        <h2
          style={{
            fontFamily: "Arial",
            fontWeight: "bold",
            color: "#99CC66",
            fontSize: "1.5rem",
            margin: 0,
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          Plus Fort ensemble !
        </h2>

        <div
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            width: "32px",
            height: "22px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            cursor: "pointer",
          }}
        >
          <span
            style={{
              height: "4px",
              width: "100%",
              backgroundColor: "#99CC66",
              borderRadius: "2px",
              transition: "0.3s",
              transform: menuOpen ? "rotate(45deg) translateY(9px)" : "none",
            }}
          />
          <span
            style={{
              height: "4px",
              width: "100%",
              backgroundColor: "#99CC66",
              borderRadius: "2px",
              opacity: menuOpen ? 0 : 1,
              transition: "0.3s",
            }}
          />
          <span
            style={{
              height: "4px",
              width: "100%",
              backgroundColor: "#99CC66",
              borderRadius: "2px",
              transition: "0.3s",
              transform: menuOpen ? "rotate(-45deg) translateY(-9px)" : "none",
            }}
          />
        </div>
      </div>

      <motion.nav
        initial="hidden"
        animate={menuOpen ? "visible" : "hidden"}
        variants={containerVariants}
        style={{
          position: "absolute",
          top: "80px",
          height: "500px",
          width: " 300px",
          right: "1.5rem",
          backgroundColor: "#99CC66",
          borderRadius: "5px",
          overflow: "hidden",
          padding: "1rem 2rem",
          zIndex: 3000,
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {menuItems.map((id) => (
          <motion.a
            key={id}
            variants={itemVariants}
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
          </motion.a>
        ))}
      </motion.nav>
    </header>
  );
}

// --- Efekt animimi gjatë scroll-it ---
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

// --- Komponenti kryesor ---
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
    <div style={{ backgroundColor: "#000000", minHeight: "100vh" }}>
      <Header />

      <main
        style={{
          marginTop: "110px",
          scrollBehavior: "smooth",
        }}
      >
        {/* Seksioni Video */}
        <ScrollSection>
          <section className="container-fluid my-4 px-3">
            <div className="row g-4 justify-content-center">
              {/* Video */}
              <div className="col-12 col-md-6 d-flex justify-content-center">
                <div style={{ padding: mediaPadding, width: "100%" }}>
                  <CadreWrapper>
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "16/9",
                      }}
                    >
                      <video
                        src={video}
                        className="w-100 h-100"
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </CadreWrapper>
                </div>
              </div>

              {/* Infos */}
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
                        fontFamily: "Arial, sans-serif",
                        fontWeight: "bold",
                        fontSize: "36px",
                        color: "#000000",
                        marginBottom: "1.5rem",
                      }}
                    >
                      Comment s’inscrire au Jura Dolois Basket
                    </h3>

                    <div
                      style={{
                        fontFamily: "Arial, sans-serif",
                        fontSize: "18px",
                        color: "#000000",
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
                        Payer en ligne (aide financière le dire au point 2),
                        facilite la gestion des licences, merci.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Stil responsive për mobile */}
              <style>
                {`
  @media (max-width: 768px) {
    h3 {
      font-size: 24px !important;
      margin-bottom: 1rem !important;
    }

    div[style*="aspect-ratio"] {
      padding: 1rem !important;
      aspect-ratio: auto !important;
    }

    div[style*="font-size: 18px"] {
      font-size: 16px !important;
      line-height: 1.6 !important;
    }
  }

  @media (max-width: 480px) {
    h3 {
      font-size: 20px !important;
    }

    div[style*="font-size: 18px"] {
      font-size: 14px !important;
    }
  }
  `}
              </style>
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
                    <p style={textGreen}>
                      Porté par une équipe dirigeante dynamique, le Jura Dolois
                      Basket (JDB) s'engage activement dans le développement et
                      la promotion d'une image positive, en cultivant une
                      ambiance conviviale et chaleureuse. Nos licenciés
                      défendent fièrement nos couleurs : Noir et Rose pour les
                      équipes féminines, Noir et Vert pour les équipes
                      masculines.
                    </p>
                    <p style={textGreen}>
                      Fort de son histoire, le Jura Dolois Basket a su obtenir
                      d'excellents résultats au fil des années et nous plaçons
                      la formation de nos jeunes talents au cœur de notre projet
                      sportif afin de rester compétitifs. Chaque saison,
                      plusieurs de nos joueuses et joueurs intègrent la
                      sélection du Jura, témoignant du succès de notre travail
                      avec la relève.
                    </p>
                    <p style={textGreen}>
                      L’association « Jura Dolois Basket » est née en 2004 de la
                      fusion de deux associations emblématiques de
                      l’agglomération doloise : l’USTD Basket, basée à Tavaux,
                      qui accueillait les jeunes de Tavaux, et l’Association
                      Basket Club Dolois, située à Dole, qui accueillait les
                      jeunes de Dole et de ses alentours.
                    </p>
                    <p style={textGreen}>
                      Le Jura Dolois Basket dispose d'infrastructures sportives
                      situées dans l’agglomération du Grand Dole, avec les
                      rencontres à domicile qui se déroulent au gymnase Belvoye,
                      à Damparis.
                    </p>
                    <p style={textGreen}>
                      L’association Jura Dolois Basket incarne une véritable
                      communauté sportive unie autour de la passion du basket.
                      Intergénérationnelle, elle rassemble des équipes allant du
                      mini-basket aux équipes seniors.
                    </p>
                    <p style={textGreen}>
                      Aujourd'hui, ce sont plus de 250 licenciés qui font vivre
                      et vibrer l’association.
                    </p>
                  </div>
                </div>
              </div>

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
                        className="position-absolute text-center fw-bold"
                        style={{
                          top: "3%",
                          left: "30%",
                          transform: "translateX(-50%)",
                          fontSize: "clamp(16px, 3vw, 28px)",
                          color: "#99CC66",
                          textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
                          whiteSpace: "nowrap",
                          zIndex: 11,
                        }}
                      >
                        ET DEMAIN S'ECRIRA AVEC VOUS
                      </h1>
                    </div>
                  </CadreWrapper>
                </div>
              </div>
            </div>
          </section>
        </ScrollSection>

        {/* Separator */}
        <div className="container-fluid my-4 px-3">
          <hr
            style={{
              border: "none",
              height: "30px",
              backgroundColor: "#99CC66",

              margin: "2rem 0",
            }}
          />
        </div>

        {/* Engagement Moral */}
        <ScrollSection>
          <section id="engagement" className="container-fluid my-4 px-3">
            <div className="row g-4 justify-content-center">
              <div className="col-12 col-md-6 d-flex justify-content-center">
                <div style={{ padding: mediaPadding, width: "100%" }}>
                  <div
                    style={{
                      backgroundColor: "#000",
                      padding: "1rem",
                    }}
                  >
                    <h3 style={titleStyle}>Engagement Moral</h3>
                    <p style={textGreen}>
                      <strong>Responsabilité :</strong>
                      <br />
                      Nous adoptons une approche globale du basket, qui intègre
                      non seulement l’aspect sportif des joueurs, mais également
                      leur environnement social, avec une attention particulière
                      aux règles d’arbitrage et aux comportements visant le bien
                      commun.
                    </p>

                    <p style={textGreen}>
                      <strong>Exemplarité :</strong>
                      <br />
                      Principe au cœur de notre charte, nous demandons à chacun
                      de faire preuve d’exemplarité. Nous attendons de tous nos
                      licenciés qu'ils respectent les règles du jeu, les
                      adversaires, les arbitres, les éducateurs, les
                      dirigeants/bénévoles, les autres joueurs, les spectateurs,
                      les partenaires, et le matériel.
                    </p>
                    <p style={textGreen}>
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
                    <p style={textGreen}>
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

        {/* Separator */}
        <div className="container-fluid my-4 px-3">
          <div className="row g-4 justify-content-center align-items-stretch">
            <div className="col-12 d-flex justify-content-center">
              <hr
                style={{
                  border: "none",
                  height: "30px",
                  backgroundColor: "#99CC66",
                  flexGrow: 1,
                  alignSelf: "stretch",
                  margin: 0,
                }}
              />
            </div>
          </div>
        </div>

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
                  <div
                    style={{
                      backgroundColor: "#000",
                      padding: "1rem",
                    }}
                  >
                    <h3 style={titleStyle}>Bénévoles et Partenaires</h3>
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
    </div>
  );
}

export default Accueil;
