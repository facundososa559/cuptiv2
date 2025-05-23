import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from './components/Footer/Footer';
import NavBar from './components/Navbar/NavBar';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import EnergiasRenovables from './pages/EnergiasRenovables';
import EficienciaEnergetica from './pages/EficienciaEnergetica';
import DisenoIndustrial from './pages/DisenoIndustrial';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
          <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/servicios/energias-renovables" element={<EnergiasRenovables />}/>
          <Route path="/servicios/eficiencia-energetica" element={<EficienciaEnergetica />}/>
          <Route path="/servicios/diseno-industrial" element={<DisenoIndustrial />}/>
          <Route path="/calculadora" element={<Calculator />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
