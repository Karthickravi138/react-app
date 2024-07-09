import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [data, setData] = useState('Hello from Parent!');

  return (
    <div>
      <ChildComponent data={data} setData={setData} />
    </div>
  );
}

export default ParentComponent;
