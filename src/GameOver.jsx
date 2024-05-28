import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './GameOver.css';

const GameOver = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { players } = location.state || { players: [] }; // Obtener jugadores desde el estado de navegación

  // Encontrar al jugador con la puntuación más alta
  const maxScore = Math.max(...players.map(player => player.score));
  const winners = players.filter(player => player.score === maxScore);
  console.log(winners);

  // Función para redirigir a App.jsx cuando se hace clic en el botón "Jugar de nuevo"
  const handlePlayAgain = () => {
    navigate('/');
  };

  return (
    <div className="game-over-container">
      <h1 className="title">¡FIN DEL JUEGO!</h1>
      <div className="winner-container">
        {winners.length === 1 ? (
          <h2 className="winner"><strong>{winners[0].name}</strong> es el peor de todos ustedes</h2>
        ) : (
            <ul className="winner-list">
            {winners.map((winner, index) => (
              <li key={index}>
                <h4>{winner.name}</h4>
                {index < winners.length - 1} {/* Coma si no es el último elemento */}
              </li>
            ))}
            {' ¡son personas terribles!'} {/* Al final de la lista */}
          </ul>
          
        )}
      </div>
      <button className="play-again-button" onClick={handlePlayAgain}>Jugar de nuevo</button>
    </div>
  );
};

export default GameOver;





