import React, { useState } from 'react';

const ToggleMessageComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
      {isVisible && <p>Hello, this is a Karthik !</p>}
    </div>
  );
}

export default ToggleMessageComponent;
