import { useState, useEffect } from "react";
import Menu from "../components/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { Grid } from "react-loader-spinner";
import {
  faCss3,
  faNodeJs,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/Presentation.scss";

export default function Presentation() {
  // State to track whether the content is loaded or not
  const [contentLoaded, setContentLoaded] = useState(false);

  // useEffect to simulate a 1-second loading delay
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setContentLoaded(true);
    }, 250);

    // Clear the timer when the component is unmounted
    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <div className="presentationPage">
        <div className="backgroundImage"></div>
      {contentLoaded ? ( // Render the content only when it's loaded
        <>
      <Menu />
      <div className="presentationContainer">
        <h2>Présentation</h2>
        <p>
          Actuellement <strong>développeur web junior</strong> passionné par les
          nouvelles technologies, je suis animé par une soif d'apprendre et de
          relever de nouveaux défis. Ancien professeur, j'ai acquis des
          compétences pédagogiques qui me permettent de transmettre efficacement
          mes connaissances techniques de manière claire et concise.
        </p>
        <p>
          Mes connaissances avancées en développement front-end (
          <strong>JavaScript</strong>, <strong>HTML5</strong> et{" "}
          <strong>CSS3</strong>) et back-end (<strong>Node.js</strong>,{" "}
          <strong>express</strong>, <strong>mongoDB</strong>) me permettent de
          créer des expériences web innovantes et fluides.{" "}
        </p>
        <p>
          Vous pouvez retrouver davantage d'informations sur ma page{" "}
          <a
            href="https://www.linkedin.com/in/s%C3%A9bastien-gau-3266b768/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Linkedin.
          </a>
        </p>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faCode} color="black" />
          </div>
          <div className="face2">
            
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
          <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faNodeJs} color="#43853D" />
          </div>
        </div>
      </div>
      </>
      ) : (
        <div className="loader-container">
          <Grid type="Grid" color="#FF00FF" height={100} width={100} />
        </div>
      )}
    </div>
  );
}
