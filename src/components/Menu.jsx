import '../styles/Menu.scss';
import { Link, NavLink,useLocation } from 'react-router-dom';
import logo1 from '../assets/sg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Menu(){
    const location = useLocation();

    return(
        <div className='nav-bar'>
            <Link className='logo' to="/portfolio/">
                <img src={logo1} alt="logo site" />
                <h2>Sébastien Gau</h2>
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/portfolio/">
                    <FontAwesomeIcon icon={faHome} style={{ 
              color: location.pathname === "/portfolio/" ? "#FF00FF" : "#4d4d4e"
            }} />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/portfolio/presentation">
                    <FontAwesomeIcon icon={faUser} style={{ 
              color: location.pathname === "/portfolio/presentation" ? "#FF00FF" : "#4d4d4e"
            }} />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="works-link" to="/portfolio/works">
                    <FontAwesomeIcon icon={faBriefcase} style={{ 
              color: location.pathname === "/portfolio/works" ? "#FF00FF" : "#4d4d4e"
            }} />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/portfolio/contact">
                    <FontAwesomeIcon icon={faEnvelope} style={{ 
              color: location.pathname === "/portfolio/contact" ? "#FF00FF" : "#4d4d4e"
            }} />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a href="https://github.com/Msgau" rel="noopener noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faGithub}/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/s%C3%A9bastien-gau-3266b768/" rel="noopener noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
            </ul>
        </div>
    )
}