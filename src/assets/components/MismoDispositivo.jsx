import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/MismoDispositivo.css';

const MismoDispositivo = () => {
  const [players, setPlayers] = useState([{ name: '', score: 0 }, { name: '', score: 0 }]); // Inicializamos con dos jugadores vacíos
  const navigate = useNavigate();

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    const list = [...players];
    list[index].name = value;
    setPlayers(list);
  };

  const handleAddInput = () => {
    setPlayers([...players, { name: '', score: 0 }]);
  };

  const handleContinue = () => {
    // Validar que todos los nombres de los jugadores no estén vacíos
    const allPlayersFilled = players.every(player => player.name.trim() !== '');
    // Validar que haya al menos 2 jugadores
    const minimumTwoPlayers = players.length >= 2;

    if (!allPlayersFilled) {
      alert('Por favor, completa todos los nombres de los jugadores.');
    } else if (!minimumTwoPlayers) {
      alert('Se necesitan mínimo 2 jugadores.');
    } else {
      navigate('/gameLocal', { state: { players } });
    }
  };

  return (
    <div>
      <h2>Jugadores</h2>
      <div id="player-form">
        {players.map((player, index) => (
          <input
            key={index}
            type="text"
            name={`player${index + 1}`}
            placeholder={`Nombre del Participante ${index + 1}`}
            className="player-input"
            value={player.name}
            onChange={(e) => handleInputChange(e, index)}
          />
        ))}
        <div className="add-input-container">
          <button type="button" onClick={handleAddInput} className="add-input-button">
            Añadir
          </button>
        </div>
        <button type="button" onClick={handleContinue} className="continue-button">
          Continuar
        </button>
      </div>
    </div>
  );
}

export default MismoDispositivo;


















