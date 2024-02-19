import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import WhatsGoingOn from './components/Pages/WhatsGoingOn';
import About from './components/Pages/About';
import Fundations from './components/Pages/Fundations';
import Contact from './components/Pages/Contact';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/WhatsGoingOn" element={<WhatsGoingOn />} />
        <Route path="/About" element={<About />} />
        <Route path="/Fundations" element={<Fundations />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;