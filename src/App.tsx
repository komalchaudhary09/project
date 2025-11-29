import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Works from './pages/Works';
import Clints from './pages/Clints';
import Contact from './pages/Contact';

import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './Component/Layout/ScrolToTop';


function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/works" element={<Works />} />
        <Route path="/clients" element={<Clints />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
