import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Error404 from './Error404';
import Presentation from './Presentation';
import Portfolio from './Portfolio';
import Contact from './Contact';

function RouteConfiguration() {

    return (
      <div className="page-container">
      <div className="content-wrap">
      
        <Router>
          <Routes>
            <Route path="/portfolio/" element={<Home />} />
            <Route path="/portfolio/home" element={<Home />} />
            <Route path='/portfolio/presentation' element={< Presentation/>} />
            <Route path="/*" element={<Error404 />} />
            <Route path="/portfolio/works" element={<Portfolio />} />
            <Route path="/portfolio/contact" element={<Contact />} />
          </Routes>
        </Router>
  
      </div>
      {/* <Footer /> */}
    </div>
    );
}
  
export default RouteConfiguration;