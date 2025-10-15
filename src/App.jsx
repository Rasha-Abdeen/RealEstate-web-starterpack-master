import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import Hero from "./components/hero";
import Slider from "./components/slider";
import Accordin from "./components/accordin";
import Cta from "./components/cta";
import Footer from "./components/footer";
import Footernav from './components/footernav';
import About from './components/about';
import Sale from './components/sale';
import ToLet from './components/tolet';
import Commercial from './components/commercial';


function Home() {
  return (
    <>
      <Hero/>
      <Slider/>
      <Cta/>
      <Accordin/>
    </>
  );
}

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/to-let" element={<ToLet />} />
        <Route path="/commercial" element={<Commercial />} />
      </Routes>
      <Footer/>
      <Footernav/>
    </>
  );
}

export default App;
