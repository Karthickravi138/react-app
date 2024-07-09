import React from 'react';
import './ButtonComponent.css';

const ButtonComponent = ({ onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      Click Me!
    </button>
  );
}

export default ButtonComponent;
