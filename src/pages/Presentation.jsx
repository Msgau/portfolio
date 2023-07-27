import '../styles/Presentation.css';
import Menu from '../components/Menu';

export default function Presentation() {
    return (
        <>
        <Menu />
        <div className='presentationContainer'>
        <h2>Présentation</h2>
        <p>Actuellement <strong>développeur web junior</strong> passionné par les nouvelles technologies, je suis animé par une soif d'apprendre et de relever de nouveaux défis. 
            Ancien professeur, j'ai acquis des compétences pédagogiques qui me permettent de transmettre efficacement mes connaissances techniques de manière claire et concise.
        </p>
        <p>Mes connaissances avancées en développement front-end (<strong>JavaScript</strong>, <strong>HTML5</strong> et <strong>CSS3</strong>) et back-end (<strong>Node.js</strong>, <strong>express</strong>, <strong>mongoDB</strong>) me permettent de créer des expériences web innovantes et fluides. </p>
        <p>Vous pouvez retrouver davantage d'informations sur ma page <a href="https://www.linkedin.com/in/s%C3%A9bastien-gau-3266b768/" rel="noopener noreferrer" target="_blank">Linkedin.</a></p>
        </div>
        </>
    )
}