// MenuButton.jsx
import React, { useRef, useEffect } from 'react';

const MenuButton = ({ onClick, text }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.from(buttonRef.current, {
      duration: 2,
      scale: 0.5,
      opacity: 0,
      delay: 0.5,
      ease: "elastic.out(1, 0.3)"
    });
  }, []);

  return (
    <button ref={buttonRef} className="btn" onClick={onClick}>
      {text}
    </button>
  );
}

export default MenuButton;

