import "../styles/Modal.scss";
import { Grid } from "react-loader-spinner";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import reactLogo from "../assets/logos/logoREACT.png";
import htmlLogo from "../assets/logos/logoHTML.png";
import cssLogo from "../assets/logos/logoCSS.png";
import jsLogo from "../assets/logos/logoJAVASCRIPT.png";
import exLogo from "../assets/logos/logoExpress.png";
import mongodbLogo from "../assets/logos/logoMongo.png";
import lightLogo from "../assets/logos/logoLighthouse.png";
import jwtLogo from "../assets/logos/logoJWT.png";
import logoNode from "../assets/logos/logoNodeJs.png";
import tmdbLogo from "../assets/logos/logoTMDB.png";
import sqlLogo from "../assets/logos/logoSQL.png";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Modal = ({
  show,
  onClose,
  imageSrc,
  imageSrc2,
  imageAlt,
  imageAlt2,
  projectData,
}) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleCloseModal = (e) => {
    // Vérifie si l'événement provient de la div .modal-overlay (en dehors de la modale)
    if (
      e.target.classList.contains("nav-bar") ||
      e.target.classList.contains("modal-overlay") ||
      e.target.classList.contains("close-btn") 
      
    ) {
      e.stopPropagation();
      onClose(); // Ferme la modale si l'événement provient de l'extérieur
    }
  };

  useEffect(() => {
    // Réinitialise l'état showContent chaque fois que la propriété show change
    setShowContent(false);
  }, [show]);

  useEffect(() => {
    // Fonction qui sera exécutée une fois que les deux images sont chargées
    const handleAllImagesLoaded = () => {
      setImagesLoaded(true);
      setTimeout(() => {
        setShowContent(true);
      }, 1000);
    };

    // Crée des objets d'image pour les deux images
    const img1 = new Image();
    const img2 = new Image();

    // Définit les gestionnaires onLoad pour chaque image
    img1.onload = handleAllImagesLoaded;
    img2.onload = handleAllImagesLoaded;

    // Définit les sources des images
    img1.src = imageSrc;
    img2.src = imageSrc2;

    // Nettoyage : supprime les gestionnaires onLoad lorsque le composant est démonté
    return () => {
      img1.onload = null;
      img2.onload = null;
    };
  }, [imageSrc, imageSrc2]); // Déclenchez l'effet lorsque les sources des images changent

  if (!show) return null;

  const logoMapping = {
    REACT: reactLogo,
    HTML: htmlLogo,
    CSS: cssLogo,
    JAVASCRIPT: jsLogo,
    EXPRESS: exLogo,
    MONGODB: mongodbLogo,
    LIGHTHOUSE: lightLogo,
    JSONWEBTOKEN: jwtLogo,
    NODEJS: logoNode,
    API_TMDB: tmdbLogo,
    SQL: sqlLogo,
  };

  return (
    <div className="modal-overlay" onClick={handleCloseModal}>
      <div className="modal">
        <div className="close-btn" onClick={onClose}>
          <FontAwesomeIcon
            icon={faX}
            style={{
              color: "#FF00FF",
            }}
          />
        </div>
        {imagesLoaded ? (
          <>
            {showContent ? ( // Vérifier s'il est temps d'afficher le contenu
              <>
                <div className="modal-div one">
                <a href={imageSrc} target="_blank" rel="noopener noreferrer" className="img-link">
                    <img src={imageSrc} alt={imageAlt} className="modal-img" />
                  </a>

                  <a href={imageSrc2} target="_blank" rel="noopener noreferrer" className="img-link">
                    <img src={imageSrc2} alt={imageAlt2} className="modal-img" />
                  </a>
                </div>
                <div className="modal-div two">
                  <h2>
                  {projectData.link ? (
              <a
                href={projectData.link}
                style={{ color: "black" }}
                rel="noopener noreferrer"
                target="_blank"
                className="link-ws"
                title={`${projectData.title} : aller vers le site`}
              >
                {projectData.title}{" "}
              </a>
            ) : (
              projectData.title // Afficher le titre du projet s'il n'y a pas de lien
            )}
            <a
              href={projectData.github}
              rel="noopener noreferrer"
              target="_blank"
              className="link-gh"
            >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </h2>
                  <h3>Mission :</h3>
                  <p>{projectData.mission}</p>
                  <h3>Technologies utilisées :</h3>
                  <ul>
                    {projectData.technologies.map((tech, index) => (
                      <li key={index}>
                        {logoMapping[tech.toUpperCase()] ? (
                          <img
                            src={logoMapping[tech.toUpperCase()]}
                            alt={tech}
                            title={tech}
                          /> // Afficher l'icône si disponible
                        ) : (
                          tech // Afficher le nom de la technologie s'il n'y a pas d'icône correspondant
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (

              <div className="loader-container">
                <Grid
                  height="80"
                  width="80"
                  color="#FF00FF"
                  ariaLabel="grid-loading"
                  radius="12.5"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              </div>
            )}
          </>
        ) : (
          // Afficher le loader pendant le chargement des images
          <div className="loader-container">
            <Grid
              visible={true}
              color="#FF00FF"
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{ "background-color": "#FF00FF" }}
              wrapperClass="blocks-wrapper"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
