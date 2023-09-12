import "../styles/Menu.scss";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo1 from "../assets/sg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Menu() {
  const location = useLocation();

  return (
    <div className="nav-bar">
      <Link className="logo" to="/portfolio/">
        <img src={logo1} alt="logo site" />
        <h2>Sébastien Gau</h2>
      </Link>
      <nav>
        <NavLink
          exact
          to="/portfolio/"
          activeClassName="active"
          aria-label="Onglet Accueil"
        >
          <FontAwesomeIcon
            icon={faHome}
            style={{
              color:
              location.pathname === "/portfolio" || location.pathname === "/portfolio/" ? "#FF00FF" : "#4d4d4e",
            }}
          />
        </NavLink>
        <NavLink
          exact
          to="/portfolio/presentation"
          activeClassName="active"
          className="about-link"
          aria-label="Onglet Présentation"
        >
          <FontAwesomeIcon
            icon={faUser}
            style={{
              color:
                location.pathname === "/portfolio/presentation"
                  ? "#FF00FF"
                  : "#4d4d4e",
            }}
          />
        </NavLink>
        <NavLink
          exact
          to="/portfolio/works"
          activeClassName="active"
          className="works-link"
          aria-label="Onglet Projets"
        >
          <FontAwesomeIcon
            icon={faBriefcase}
            style={{
              color:
                location.pathname === "/portfolio/works"
                  ? "#FF00FF"
                  : "#4d4d4e",
            }}
          />
        </NavLink>
        <NavLink
          exact
          to="/portfolio/contact"
          activeClassName="active"
          className="contact-link"
          aria-label="Onglet Contact"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{
              color:
                location.pathname === "/portfolio/contact"
                  ? "#FF00FF"
                  : "#4d4d4e",
            }}
          />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://github.com/Msgau"
            rel="noopener noreferrer"
            target="_blank"
            className="external__link"
            aria-label="Lien vers GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/sebastien-gau/"
            rel="noopener noreferrer"
            target="_blank"
            className="external__link"
            aria-label="Lien vers LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>
    </div>
  );
}
