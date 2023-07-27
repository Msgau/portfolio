import "../styles/Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ show, onClose, imageSrc, imageSrc2, imageAlt, imageAlt2 }) => {
  const handleCloseModal = (e) => {
    // Vérifier si l'événement provient de la div .modal-overlay (en dehors de la modale)
    if (
      e.target.classList.contains("modal-overlay") ||
      e.target.classList.contains("close-btn")
    ) {
      e.stopPropagation();
      onClose(); // Fermer la modale si l'événement provient de l'extérieur
    }
  };

  if (!show) return null;

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
        <div className="modal-div">
          <img src={imageSrc} alt={imageAlt} className="modal-img 1" />
          <img src={imageSrc2} alt={imageAlt2} className="modal-img 2" />
        </div>
        <div className="modal-div 2">

        </div>
      </div>
    </div>
  );
};

export default Modal;
