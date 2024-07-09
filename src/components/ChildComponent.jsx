import React from 'react';

const ChildComponent = ({ data, setData }) => {
  return (
    <div>
      <p>{data}</p>
      <button onClick={() => setData('Data updated from ChildComponent!!!')}>Update Data</button>
    </div>
  );
}

export default ChildComponent;
