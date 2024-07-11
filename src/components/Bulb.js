import React, { useState } from 'react';
import '../style/Bulb.css'

const Bulb = () => {
  const [isOn, setIsOn] = useState(false);

  const turnOn = () => {
    setIsOn(true);
  };

  const turnOff = () => {
    setIsOn(false);
  };

  return (
    <div className="bulb-container">
      <h1>Bulb Switch</h1>
      <img
        src={isOn ? 'https://images.freeimages.com/images/large-previews/07c/light-bulb-2-1427493.jpg?fmt=webp&w=500' : 'https://i.pinimg.com/564x/e0/fd/25/e0fd25f9127a9a109a0648c83ee61643.jpg'}
        className="bulb"
        alt="Bulb"
      />
      <div className="controls">
        <button onClick={turnOn}>Turn On</button>
        <button onClick={turnOff}>Turn Off</button>
      </div>
    </div>
  );
};

export default Bulb;
