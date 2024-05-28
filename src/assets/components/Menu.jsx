import React from 'react';
import AnimatedButton from './AnimatedButton.jsx';

const Menu = () => {
  return (
    <>
    <header>
          <h1>Menú Principal</h1>
        </header>
    <nav>
      <ul className="nav">
        <AnimatedButton text="Multijugador" route="/multijugador" />
        <AnimatedButton text="Mismo Dispositivo" route="/mismo-dispositivo" />
        <AnimatedButton text="Opciones" route="/" />
        <AnimatedButton text="Salir" route="/" />
      </ul>
      <div className="instructions">
        <p>Selecciona una opción para continuar</p>
      </div>
    </nav>
    </>
  );
}

export default Menu;





