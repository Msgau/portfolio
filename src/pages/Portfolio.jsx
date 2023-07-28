import { useState } from "react";
import "../styles/Portfolio.css";
import Menu from "../components/Menu";
import CineCrew from "../assets/images/cineCrew.png";
import CineCrew2 from "../assets/images/cineCrew2.png";
import Kasa from "../assets/images/kasa.png";
import Kasa2 from "../assets/images/kasa2.png";
import MVG from "../assets/images/monVieuxGrimoire.png";
import MVG2 from '../assets/images/monVieuxGrimoire2.png';
import Nina from "../assets/images/NinaCarducci.png";
import Nina2 from "../assets/images/Nina2.png";
import Modal from "../components/Modal";
import projectData from "../data/projectsData.json";


export default function Portfolio() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedImage2, setSelectedImage2] = useState("");
  const [selectedProjectData, setSelectedProjectData] = useState({});

  const openModal = (imageSrc, imageSrc2, projectData) => {
    setSelectedImage(imageSrc);
    setSelectedImage2(imageSrc2);
    setSelectedProjectData(projectData);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage("");
    setSelectedImage2("");
    setSelectedProjectData({});
    setModalOpen(false);
  };

  return (
    <div className="works">
      <Menu />
      <div className="backgroundImage"></div>
      <div className="portfolio">
        <div className="block" onClick={() => openModal(CineCrew, CineCrew2, projectData[0])}>
          <img
            src={CineCrew}
            alt="Projet Ciné Crew"
            title="Ciné Crew"
            className="project"
          />
          <div className="text-overlay">
            <h2>Ciné crew</h2>
            <p>voir plus</p>
          </div>
        </div>
        <div className="block" onClick={() => openModal(Kasa, Kasa2, projectData[1])}>
          <img src={Kasa} alt="Projet Kasa" title="Kasa" className="project" />
          <div className="text-overlay">
            <h2>Kasa</h2>
            <p>voir plus</p>
          </div>
        </div>
        <div className="block" onClick={() => openModal(MVG, MVG2, projectData[2])}>
          <img
            src={MVG}
            alt="Projet Mon vieux grimoire"
            title="Mon vieux grimoire"
            className="project"
          />
          <div className="text-overlay">
            <h2>Mon vieux grimoire</h2>
            <p>voir plus</p>
          </div>
        </div>
        <div className="block" onClick={() => openModal(Nina, Nina2, projectData[3])}>
          <img
            src={Nina}
            alt="Projet optimisation Nina Carducci"
            title="Nina Carducci"
            className="project"
          />
          <div className="text-overlay">
            <h2>Nina Carducci</h2>
            <p>voir plus</p>
          </div>
        </div>
      </div>
      <Modal
        show={modalOpen}
        onClose={closeModal}
        imageSrc={selectedImage}
        imageAlt="Image du projet"
        imageSrc2={selectedImage2}
        imageAlt2="Seconde image du projet"
        projectData={selectedProjectData}
      />
    </div>
  );
}
