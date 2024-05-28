import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as retos from './retos.jsx';
import * as Icon from "react-icons/fa6";
import './GameLocal.css';

const GameLocal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { players } = location.state || { players: [] };
  const [randomChallenge, setRandomChallenge] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [usedChallenges, setUsedChallenges] = useState([]);
  const challenges = retos.retos;
  const svgMap = {}

  challenges.forEach(challenge => {
    // Obtener el nombre del SVG y su correspondiente componente
    const svgName = challenge.SVG.trim();
    const componentName = `Fa${svgName}`;
    const component = Icon[componentName];
    console.log(component);
  
    // Agregar al objeto svgMap
    svgMap[svgName] = {
      SVG: componentName,
      Componente: component
    };
  });

  const selectRandomChallenge = () => {
    const availableChallenges = challenges.filter(
      (challenge) => !usedChallenges.includes(challenge.reto)
    );
    if (availableChallenges.length === 0) {
      navigate('/GameOver', { state: { players: players } });
      return null;
    }
    const randomIndex = Math.floor(Math.random() * availableChallenges.length);
    return availableChallenges[randomIndex];
  };

  useEffect(() => {
    const randomChallengeData = selectRandomChallenge();
    setRandomChallenge(randomChallengeData);
  }, [usedChallenges]);

  const handleContinue = () => {
    setShowModal(true);
  };

  const handleDiscard = () => {
    const newChallenge = selectRandomChallenge();
    setRandomChallenge(newChallenge);
    setUsedChallenges([...usedChallenges, randomChallenge.reto]);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handlePlayerSelection = (index) => {
    players[index].score += 1;
    setUsedChallenges([...usedChallenges, randomChallenge.reto]);
    setShowModal(false);
    setRandomChallenge(selectRandomChallenge());
  };

  if (!randomChallenge) {
    return <div>Loading...</div>; // Indicador de carga
  }


  return (
    <div>
      <div className="game-card">
        <div className="game-card-header">
          <h3>{randomChallenge.reto}</h3>
        </div>
        <div className="game-card-description">
          <p>{randomChallenge.Descripcion}</p>
        </div>
      </div>
      <div className="buttons-container">
        <button className="action-button" onClick={handleContinue}>
          Continuar
        </button>
        <button className="action-button" onClick={handleDiscard}>
          Descartar
        </button>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleCloseModal}>
              &times;
            </span>
            <div className="players-list">
              {players.map((player, index) => (
                <button
                  key={index}
                  className="player-button"
                  onClick={() => handlePlayerSelection(index)}
                >
                  {player.name + ': ' + player.score}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameLocal;

























