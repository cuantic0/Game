import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/AnimatedButton.css'; // Importamos el archivo CSS para los estilos

const AnimatedButton = ({ text, route }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <li className="animated-button" onClick={handleClick}>
      {text}
    </li>
  );
}

export default AnimatedButton;


 






