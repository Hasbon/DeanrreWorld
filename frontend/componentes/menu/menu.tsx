import React from 'react';
import './menu.css';

const Radio = () => {
  return (
    <div className="radio-inputs">
      <label className="radio">
        <input type="radio" name="radio" defaultChecked />
        <span className="name glow">HTML</span>
      </label>
      <label className="radio">
        <input type="radio" name="radio" />
        <span className="name glow">React</span>
      </label>
      <label className="radio">
        <input type="radio" name="radio" />
        <span className="name glow">Vue</span>
      </label>
    </div>
  );
}

export default Radio;
