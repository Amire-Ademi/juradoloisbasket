import React, { useRef, useEffect, useState } from "react";
import CadreWrapper from "../components/CadreWrapper";
import video from "../assets/match.mp4";
import trophe from "../assets/trophe.jpg";
import engagementMoral from "../assets/engagement-moral.jpg";
import soutenir from "../assets/soutenir.png";

function Accueil() {
  const editoRef = useRef(null);
  const engagementRef = useRef(null);
  const soutenirRef = useRef(null);

  const [editoHeight, setEditoHeight] = useState("300px");
  const [engagementHeight, setEngagementHeight] = useState("300px");
  const [soutenirHeight, setSoutenirHeight] = useState("300px");

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

  const textBlack = {
    fontFamily: "Arial, sans-serif",
    fontWeight: "bold",
    fontSize: "clamp(14px, 2vw, 18px)",
    color: "#000000",
  };
  const greenBg = { backgroundColor: "#99CC66" };
  const mediaPadding = "2vw";

  useEffect(() => {
    const updateHeights = () => {
      if (editoRef.current)
        setEditoHeight(`${editoRef.current.offsetHeight}px`);
      if (engagementRef.current)
        setEngagementHeight(`${engagementRef.current.offsetHeight}px`);
      if (soutenirRef.current)
        setSoutenirHeight(`${soutenirRef.current.offsetHeight}px`);
    };
    updateHeights();
    window.addEventListener("resize", updateHeights);
    return () => window.removeEventListener("resize", updateHeights);
  }, []);

  return (
    <div style={{ backgroundColor: "#000000", minHeight: "100vh" }}>
      {/* Video + Infos */}
      <div className="container-fluid my-4 px-3">
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
                  aspectRatio: "16/9", // i njëjtë me videon
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                {/* Titulli */}
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

                {/* Lista me numërim */}
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
                    2°) Demander à l’éducateur quel est son avis sur les suites
                    à donner
                  </p>
                  <p>
                    3°) Vous recevrez un email d’inscription pour réaliser votre
                    demande de licence
                  </p>
                  <p>
                    4°) Une fois votre licence validée par le club, vous
                    recevrez votre licence par mail
                  </p>

                  {/* HR */}
                  <hr
                    style={{
                      border: "none",
                      height: "5px",
                      backgroundColor: "#000000",
                      margin: "1.5rem 0",
                    }}
                  />

                  {/* Teksti shtesë */}
                  <p>
                    Le certificat médical n’est pas obligatoire chez les enfants
                    (répondre au questionnaire)
                  </p>
                  <p>
                    Payer en ligne (aide financière le dire au point 2),
                    facilite la gestion des licences, merci.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edito + Trophée */}
      <div className="container-fluid my-4 px-3">
        <div className="row g-4 justify-content-center align-items-stretch">
          {/* Teksti */}
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <div
              style={{ padding: mediaPadding, width: "100%" }}
              ref={editoRef}
            >
              <div
                className="rounded w-100 h-100"
                style={{
                  backgroundColor: "#000000",
                  overflowY: "auto",
                  padding: "1rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3 style={titleStyle}>Edito</h3>
                <p style={textGreen}>
                  Porté par une équipe dirigeante dynamique, le Jura Dolois
                  Basket (JDB) s'engage activement dans le développement et la
                  promotion d'une image positive, en cultivant une ambiance
                  conviviale et chaleureuse. Nos licenciés défendent fièrement
                  nos couleurs : Noir et Rose pour les équipes féminines, Noir
                  et Vert pour les équipes masculines.
                </p>
                <p style={textGreen}>
                  Fort de son histoire, le Jura Dolois Basket a su obtenir
                  d'excellents résultats au fil des années et nous plaçons la
                  formation de nos jeunes talents au cœur de notre projet
                  sportif afin de rester compétitifs. Chaque saison, plusieurs
                  de nos joueuses et joueurs intègrent la sélection du Jura,
                  témoignant du succès de notre travail avec la relève.
                </p>
                <p style={textGreen}>
                  L’association « Jura Dolois Basket » est née en 2004 de la
                  fusion de deux associations emblématiques de l’agglomération
                  doloise : l’USTD Basket, basée à Tavaux, qui accueillait les
                  jeunes de Tavaux, et l’Association Basket Club Dolois, située
                  à Dole, qui accueillait les jeunes de Dole et de ses
                  alentours.
                </p>
                <p style={textGreen}>
                  Le Jura Dolois Basket dispose d'infrastructures sportives
                  situées dans l’agglomération du Grand Dole, avec les
                  rencontres à domicile qui se déroulent au gymnase Belvoye, à
                  Damparis.
                </p>
                <p style={textGreen}>
                  L’association Jura Dolois Basket incarne une véritable
                  communauté sportive unie autour de la passion du basket.
                  Intergénérationnelle, elle rassemble des équipes allant du
                  mini-basket aux équipes seniors.
                </p>
                <p style={textGreen}>
                  Aujourd'hui, ce sont plus de 250 licenciés qui font vivre et
                  vibrer l’association.
                </p>
              </div>
            </div>
          </div>

          {/* Foto */}
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <div
              style={{
                padding: mediaPadding,
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CadreWrapper>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%", // marrë nga lartësia e kolonës
                    display: "flex",
                    alignItems: "stretch",
                  }}
                >
                  <img
                    src={trophe}
                    alt="Trophée"
                    style={{
                      width: "100%",
                      height: "100%", // barazon me tekstin
                      objectFit: "cover",
                    }}
                  />
                  <h1
                    style={{
                      position: "absolute",
                      top: "5%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      fontFamily: "Arial, sans-serif",
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
        </div>
      </div>

      {/* Separator */}
      <div className="container-fluid my-4 px-3">
        <hr
          style={{
            border: "none",
            height: "30px",
            backgroundColor: "#99ea48ff",

            margin: "2rem 0",
          }}
        />
      </div>

      {/* Engagement Moral */}
      <div className="container-fluid my-4 px-3">
        <div className="row g-4 justify-content-center">
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <div
              style={{ padding: mediaPadding, width: "100%" }}
              ref={engagementRef}
            >
              <div
                className="rounded w-100 h-100"
                style={{
                  backgroundColor: "#000000",
                  overflowY: "auto",
                  padding: "1rem",
                }}
              >
                <h3
                  style={{
                    fontFamily: "Arial, sans-serif",
                    fontWeight: "bold",
                    fontSize: "36px",
                    color: "rgba(153, 204, 102, 1)",
                    marginBottom: "1rem",
                  }}
                >
                  Engagement Moral
                </h3>
                <p style={textGreen}>
                  <strong>Responsabilité :</strong>
                  <br />
                  Nous adoptons une approche globale du basket, qui intègre non
                  seulement l’aspect sportif des joueurs, mais également leur
                  environnement social, avec une attention particulière aux
                  règles d’arbitrage et aux comportements visant le bien commun.
                </p>
                <p style={textGreen}>
                  <strong>Exemplarité :</strong>
                  <br />
                  Principe au cœur de notre charte, nous demandons à chacun de
                  faire preuve d’exemplarité. Nous attendons de tous nos
                  licenciés qu'ils respectent les règles du jeu, les
                  adversaires, les arbitres, les éducateurs, les
                  dirigeants/bénévoles, les autres joueurs, les spectateurs, les
                  partenaires, et le matériel.
                </p>
                <p style={textGreen}>
                  <strong>Formation :</strong>
                  <br />
                  Nos jeunes licenciés ne se forment pas seulement en tant que
                  joueurs, mais acquièrent également des compétences
                  essentielles au bon déroulement des rencontres comme faire
                  respecter des règles de jeu en tant qu’arbitre ou gérer les
                  évènements de jeu (entrée en jeu, points marqués, fautes
                  commises, etc.) en tant que marqueur ou maîtriser le temps de
                  jeu en tant que chronométreur.
                </p>
                <p style={textGreen}>
                  <strong>Général :</strong>
                  <br />
                  Nous sommes engagés dans une démarche de responsabilité
                  sociétale. Notre association est un lieu de vie et
                  d’apprentissage où ces valeurs sont au centre de notre projet
                  associatif visant à allier excellence sportive et citoyenneté.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <div style={{ padding: mediaPadding, width: "100%" }}>
              <CadreWrapper>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    maxHeight: "500px",
                    aspectRatio: "16/9",
                  }}
                >
                  <img
                    src={engagementMoral}
                    alt="Engagement Moral"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </CadreWrapper>
            </div>
          </div>
        </div>
      </div>
      {/* Separator */}
      <div className="container-fluid my-4 px-3">
        <div className="row g-4 justify-content-center align-items-stretch">
          <div className="col-12 d-flex justify-content-center">
            <hr
              style={{
                border: "none",
                height: "30px",
                backgroundColor: "#99ea48ff",
                flexGrow: 1,
                alignSelf: "stretch",
                margin: 0,
              }}
            />
          </div>
        </div>
      </div>
      {/* Soutenir */}
      <div className="container-fluid my-4 px-3">
        <div className="row g-4 justify-content-center">
          {/* Foto */}
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <div style={{ padding: mediaPadding, width: "100%" }}>
              <CadreWrapper>
                <div style={{ position: "relative", width: "100%" }}>
                  <img
                    src={soutenir}
                    alt="Soutenir"
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "500px", // madhësia e fotos responsive si Trophee
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                  {/* Mund të vendosësh titull mbi foto nëse do */}
                  {/* <h1 style={{position: "absolute", top: "5%", left: "50%", transform: "translateX(-50%)", ...}}>Votre titre</h1> */}
                </div>
              </CadreWrapper>
            </div>
          </div>

          {/* Teksti */}
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <div style={{ padding: mediaPadding, width: "100%" }}>
              <div
                className="rounded w-100 h-100"
                style={{
                  backgroundColor: "#000000",
                  overflowY: "auto",
                  padding: "1rem",
                }}
              >
                <h3
                  style={{
                    fontFamily: "Arial",
                    fontWeight: "bold",
                    fontSize: "36px",
                    color: "#99CC66",
                    marginBottom: "1rem",
                  }}
                >
                  Bénévoles et Partenaires
                </h3>
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
                  l’engagement de ses bénévoles. Qu’il s’agit de nous aider à
                  l’encadrement lors des entraînements ou des matchs, de
                  soutenir nos équipes lors des compétitions ou de participer à
                  la vie du club au quotidien, chaque coup de main est précieux
                  et fait votre passion du sport et contribue à une belle
                  aventure collective. N’hésitez pas à nous rejoindre.
                  <br />
                  <br />
                  Pour toute information ou pour proposer votre aide, vous
                  pouvez nous contacter au zéro6 cinq1 sept3 deux4 huit4.
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
                  dans la vie de notre association. Grâce à leur soutien, nous
                  pouvons offrir de meilleures conditions d’entraînement à nos
                  membres, organiser des événements, développer nos projets
                  sportifs et acheter des tenues de match. Leur engagement à nos
                  côtés contribue directement au dynamisme et à la réussite du
                  Jura Dolois Basket (JDB).
                  <br />
                  <br />
                  Si vous souhaitez associer votre image à notre aventure
                  sportive et soutenir une initiative locale pleine d’énergie et
                  de passion, nous serions ravis d’échanger avec vous. <br />
                  <br />
                  N’hésitez pas à nous contacter pour en savoir plus sur les
                  différentes possibilités de partenariat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
