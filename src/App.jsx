import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './assets/components/Menu.jsx';
import Multijugador from './assets/components/Multijugador.jsx';
import MismoDispositivo from './assets/components/MismoDispositivo.jsx';
import GameLocal from './GameLocal.jsx'; // Asegúrate de importar correctamente GameLocal
import './styles.css';
import GameOver from './GameOver.jsx';

function App() {
  return (
    <Router>
      <div className="container">
        <main>
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/multijugador" element={<Multijugador />} />
            <Route path="/mismo-dispositivo" element={<MismoDispositivo />} />
            <Route path="/GameLocal" element={<GameLocal />} />
            <Route path="/GameOver" element={<GameOver />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;








